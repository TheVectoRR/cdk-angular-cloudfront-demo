import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css'
})
export class ProjectsComponent {
  ProjectStatus = ProjectStatus;
  projects: ProjectCard[] = [
    {
      title: 'AWS-Hosted Website with CloudFront Edge Delivery',
      summary: 'High-performance Angular site served globally via AWS CloudFront and Route 53. Fully automated IaC with AWS CDK in GitHub.',
      status: ProjectStatus.InProgress,
      tags: ['AWS', 'Route 53', 'CloudFront', 'CDK', 'Angular'],
      githubLink: 'https://github.com/TheVectoRR/cdk-angular-cloudfront-demo',
      link: 'https://dev.vecode.nl/'
    },
    {
      title: 'GitOps Homelab – k3s on Proxmox',
      summary: 'Self-hosted Kubernetes lab with FluxCD and External Secrets Operator, pulling secrets from AWS and deployed via GitOps pipelines.',
      status: ProjectStatus.InProgress,
      tags: ['FluxCD', 'k3s', 'Proxmox', 'GitOps'],
      githubLink: 'https://github.com/TheVectoRR/homelab',
    },
    {
      title: 'AI-Powered Quiz App – Java Microservices on Kubernetes',
      summary: 'Interactive quiz platform built with Spring Boot and Spring AI, running as microservices on Kubernetes for scalability and resilience.',
      status: ProjectStatus.InProgress,
      tags: ["Java", "Spring Boot", "Spring AI", "Kubernetes", "Microservices"],
      githubLink: 'https://github.com/TheVectoRR/spring-kubernetes-microservices-ai-lab',
    },
    {
      title: 'Secrets Management Patterns',
      summary: 'Compare AWS Secrets Manager vs Parameter Store for k8s apps with automated rotation.',
      status: ProjectStatus.Planned,
      tags: ['Security', 'AWS', 'Kubernetes']
    }
  ];
}

interface ProjectCard {
  title: string;
  summary: string;
  status: ProjectStatus;
  tags: string[];
  githubLink?: string;
  link?: string;
}

enum ProjectStatus {
  Live = 'live',
  InProgress = 'in-progress',
  Planned = 'planned',
}
