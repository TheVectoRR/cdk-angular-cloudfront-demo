import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, CfnBucketPolicy } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export class CdkFeAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucketName = 'cdkapp-site-bucket';

    const siteBucket = new Bucket(this, 'SiteBucket', {
      bucketName: bucketName,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    new BucketDeployment(this, 'DeployWithValidation', {
      sources: [Source.asset('./src/frontend-app')],
      destinationBucket: siteBucket
    });

    const bucketPolicy = new CfnBucketPolicy(this, "BucketPolicy", {
      bucket: bucketName,
      policyDocument: {
        Statement: [
          {
            Action: 's3:getObject',
            Effect: 'Allow',
            Principal: {
              AWS: '*',
            },
            Resource: [
              siteBucket.bucketArn,
              `${siteBucket.bucketArn}/*`
            ],
          },
        ],
        Version: '2012-10-17',
      },
    });
  }
}
