import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skills {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'vectorit-website',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './vectorit-website.component.html',
  styleUrls: ['./vectorit-website.component.css'],
})
export class VectoritWebsiteComponent {
  readonly year = new Date().getFullYear();

  readonly services: Skills[] = [
    {
      title: 'Cloud Architecture',
      desc: 'Design and optimise secure, scalable cloud‑native infrastructures on AWS & Azure.',
      icon: 'Cloud',
    },
    {
      title: 'AI Integration',
      desc: 'Embed generative AI and machine‑learning capabilities into existing products and workflows.',
      icon: 'Brain',
    },
    {
      title: 'DevOps & Kubernetes',
      desc: 'Automate builds, tests, and continuous delivery with container‑orchestrated pipelines.',
      icon: 'Layers',
    },
  ];
}
