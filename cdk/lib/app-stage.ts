import { Construct } from 'constructs';
import { CdkAppStack } from './cdk-app-stack';
import { CdkFeAppStack } from './cdk-fe-app-stack';
import { Stage, StageProps } from 'aws-cdk-lib';

interface AppStageProps extends StageProps {
    contextEnv: string; // e.g. "dev", "prod"
}

export class AppStage extends Stage {
    constructor(scope: Construct, id: string, props: AppStageProps) {
        super(scope, id, props);

        const stackEnv = this.node.tryGetContext(props.contextEnv) || {};

        const app = new CdkAppStack(this, 'CdkAppStack', {
            env: props.env,
            stackName: 'CdkAppStack',
        });

        const fe = new CdkFeAppStack(this, 'CdkFrontendAppStack', {
            env: props.env,
            stackName: 'CdkFrontendAppStack',
            domainName: stackEnv.domainName,
            siteSubDomain: stackEnv.siteSubDomain,
            certificateArn: stackEnv.certificateArn,
        });

        // If frontend depends on backend, uncomment:
        // fe.addDependency(app);
    }
}
