import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack-component',
  imports: [],
  templateUrl: './tech-stack-component.html',
  styleUrl: './tech-stack-component.css'
})
export class TechStackComponent {

  readonly skillsList: SkillCategory[] = [
    {
      category: 'Full Stack Development',
      technologies: ['Java', 'Spring-Boot', 'TypeScript', 'Node.js', 'Angular', 'Postgres'],
      yearsOfExperience: '10+'
    },
    {
      category: 'Native Cloud Development',
      technologies: ['AWS', 'CDK', 'Serverless', 'Lambda', 'S3', 'DynamoDB', 'SQS'],
      yearsOfExperience: '6'
    },
    {
      category: 'Devops',
      technologies: ['CICD', 'Kubernetes','GitOps', 'FluxCD'],
      yearsOfExperience: '2'
    }
  ];
}

interface SkillCategory {
  category: string;
  technologies: string[];
  yearsOfExperience: string
}
