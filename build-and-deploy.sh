#!/bin/bash

rm -rf ./build
npm run build
cdk deploy --all
