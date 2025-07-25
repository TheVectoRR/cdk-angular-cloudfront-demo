import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
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

interface Skills {
  title: string;
  desc: string;
  icon: string;
}
