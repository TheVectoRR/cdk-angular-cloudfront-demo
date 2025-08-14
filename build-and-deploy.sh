#!/bin/bash

#refresh angular build and deploy (should done first so that the correct index.html will be rebuild)
cd angular-app
npm install
npm run build

# refresh CDK build and deploy
cd ../cdk
rm -rf ./build
npm install
npm run build
cdk deploy --all
