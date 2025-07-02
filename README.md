# Angular CloudFront CDK Demo

This project is a demo setup for deploying an Angular web application to AWS using the AWS Cloud Development Kit (CDK). It includes both the infrastructure code (written with CDK) and the Angular frontend application.

The CDK stack provisions a CloudFront distribution and related AWS resources to host and serve the Angular app via a secure, performant CDN.

## 🔧 Technologies Used

- [AWS CDK](https://docs.aws.amazon.com/cdk/) – Infrastructure as Code (IaC)
- [Angular](https://angular.io/) – Frontend framework
- [Amazon S3](https://aws.amazon.com/s3/) – Static website hosting
- [Amazon CloudFront](https://aws.amazon.com/cloudfront/) – Content delivery network (CDN)

## 📁 Project Structure

```
├── cdk/ # Contains the AWS CDK app and infrastructure code
│ ├── bin/ # Entry point for the CDK application
│ ├── lib/ # CDK stack definitions
│ └── src/ # Other AWS services
│
├── angular-app/ # Angular frontend application
│ ├── src/ # Angular source code
│ ├── angular.json # Angular project configuration
│
├── build-and-deploy.sh # Script to build and deploy both Angular app and CDK stack
├── README.md # Project documentation
```

## 🚀 Deployment

To build and deploy the entire project (Angular app + AWS infrastructure), simply run:

```bash
  ./build-and-deploy.sh
```

## ✅ Prerequisites

Before you begin, make sure you have the following installed and configured on your machine:

- **Node.js & npm** [Download Node.js](https://nodejs.org/)

- **AWS CLI**
  [Install AWS CLI](https://aws.amazon.com/cli/)

- **AWS CDK CLI**
  Install globally using npm:
  ```bash
  npm install -g aws-cdk
  ```
- **Angular CLI**
  Install globally using npm:
  ```bash
  npm install -g @angular/cli
  ```
- **AWS Credentials**
  Configure your AWS credentials locally, e.g., by running:
  ```bash
  aws configure
  ```
  or by setting environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)


## 📄 License
This project is provided as-is for demonstration and educational purposes.
