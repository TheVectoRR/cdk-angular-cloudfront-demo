import {
  CfnOutput, Duration,
  RemovalPolicy,
  Stack,
  StackProps
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import {
  AccessLevel,
  Distribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy
} from 'aws-cdk-lib/aws-cloudfront';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';

interface StaticSiteStackProps extends StackProps{
  domainName: string;
  siteSubDomain: string;
  certificateArn: string;
}

export class CdkFeAppStack extends Stack {
  constructor(scope: Construct, id: string, props: StaticSiteStackProps) {
    super(scope, id, props);

    const { domainName, siteSubDomain } = props;
    const siteDomain = `${siteSubDomain}.${domainName}`;

    const siteBucket = new Bucket(this, 'SiteBucket', {
      bucketName: siteDomain,
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    const zone = HostedZone.fromLookup(this, 'Zone', {domainName});

    const originAccessIdentity = new OriginAccessIdentity(this, 'OAI');
    siteBucket.grantRead(originAccessIdentity);

    // certificate was created manually since it has to be in us-east-1.
    const certificateArn = props.certificateArn;

    const s3Origin = S3BucketOrigin.withOriginAccessControl(siteBucket, {
      originAccessLevels: [AccessLevel.READ],
    });// Ruben

    const distribution = new Distribution(this, 'SiteDistribution', {
      defaultBehavior: {
        origin: s3Origin,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      domainNames: [siteDomain],
      certificate: Certificate.fromCertificateArn(this, 'Cert', certificateArn),
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/error.html',
          ttl: Duration.minutes(5),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/error.html',
          ttl: Duration.minutes(5),
        },
      ],
    });

    new ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone
    });

    new BucketDeployment(this, 'DeployWithValidation', {
      sources: [Source.asset('./src/frontend-app')],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*']
    });

    new CfnOutput(this, 'SiteUrl', {value: `https://${siteDomain}`});

  }
}
