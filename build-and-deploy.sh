#!/bin/bash

#refresh angular build and deploy (should done first so that the correct index.html will be rebuild)
cd src/angular-app
npm run build

cd ..
cd ..

# refresh CDK build and deploy
rm -rf ./build
npm run build
cdk deploy --all

