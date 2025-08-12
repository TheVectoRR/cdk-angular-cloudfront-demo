import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { TechStackComponent } from '../../components/tech-stack-component/tech-stack-component';
import { ProjectsComponent } from '../../components/projects-component/projects-component';

@Component({
  selector: 'app-about-component',
  imports: [HeroComponent, TechStackComponent, ProjectsComponent],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
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

interface BlogTeaser {
  title: string;
  summary: string;
  eta?: string;
}
