import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { TechStackComponent } from '../../components/tech-stack-component/tech-stack-component';

@Component({
  selector: 'app-about-component',
  imports: [HeroComponent, TechStackComponent],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  projects: ProjectCard[] = [
    {
      title: 'GitOps Homelab – k3s on Proxmox',
      summary: 'FluxCD‑managed workloads with External Secrets Operator pulling from AWS; IaC in GitHub.',
      status: 'in-progress',
      tags: ['FluxCD', 'k3s', 'Proxmox', 'GitOps']
    },
    {
      title: 'Secrets Management Patterns',
      summary: 'Compare AWS Secrets Manager vs Parameter Store for k8s apps with automated rotation.',
      status: 'planned',
      tags: ['Security', 'AWS', 'Kubernetes']
    }
  ];

  blog: BlogTeaser[] = [
    {
      title: 'Why I Built a GitOps Homelab',
      summary: 'How a home cluster keeps my skills sharp and feeds real‑world experimentation.',
      eta: 'September'
    },
    {
      title: 'Secrets in Kubernetes with AWS',
      summary: 'ESO, IRSA, and practical guardrails for small teams.'
    },
    {
      title: 'From Full‑stack to DevOps',
      summary: 'Lessons from migrating legacy stacks and owning CI/CD.'
    }
  ];
}

interface ProjectCard {
  title: string;
  summary: string;
  status: 'live' | 'in-progress' | 'planned';
  tags: string[];
  link?: string; // optional external link or route
}

interface BlogTeaser {
  title: string;
  summary: string;
  eta?: string;
}
