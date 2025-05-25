#!/usr/bin/env node
import { CdkAppStack } from '../lib/cdk-app-stack';
import { App } from 'aws-cdk-lib';
import { CdkFeAppStack } from '../lib/cdk-fe-app-stack';

const app = new App();
new CdkAppStack(app, 'CdkAppStack', {
});

new CdkFeAppStack(app, 'CdkFrontendAppStack', {

});
