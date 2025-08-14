import { Construct } from 'constructs';
import { pipelines, Stack, StackProps } from 'aws-cdk-lib';
import { AppStage } from './app-stage';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';

export class PipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const connectionArn = 'arn:aws:codeconnections:eu-west-1:836024728316:connection/ec297c1f-b4f0-4d20-ad56-48c0109cba28';

        const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
            pipelineName: 'VectorIT-website-Pipeline',

            synth: new pipelines.ShellStep('Synth', {
                input: pipelines.CodePipelineSource.connection(
                    'TheVectoRR/cdk-angular-cloudfront-demo',
                    'main',
                    { connectionArn, }
                ),
                commands: [
                    // refresh angular build and deploy (should be done first)
                    'cd angular-app',
                    'npm ci',
                    'npm run build',

                    // refresh CDK build and synth
                    'cd ../cdk',
                    'rm -rf ./build',
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ],
                primaryOutputDirectory: 'cdk/cdk.out',
            }),
            synthCodeBuildDefaults: {
                partialBuildSpec: BuildSpec.fromObject({
                    phases: {
                        install: {
                            "runtime-versions": {
                                nodejs: "22"
                            }
                        }
                    }
                })
            }
        });

        pipeline.addStage(new AppStage(this, 'Dev', {
            env: { account: this.account, region: 'eu-west-1' },
            contextEnv: 'dev',
        }));

    }
}
