#!/usr/bin/env node
import { CdkAppStack } from '../lib/cdk-app-stack';
import { App } from 'aws-cdk-lib';
import { CdkFeAppStack } from '../lib/cdk-fe-app-stack';

const app = new App();
const stackEnv = app.node.tryGetContext("dev");

new CdkAppStack(app, 'CdkAppStack', {
});

new CdkFeAppStack(app, 'CdkFrontendAppStack', {
    domainName: stackEnv.domainName,
    siteSubDomain: stackEnv.siteSubDomain,
    certificateArn: stackEnv.certificateArn,
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});
