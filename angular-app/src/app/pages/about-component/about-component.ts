import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { TechStackComponent } from '../../components/tech-stack-component/tech-stack-component';
import { ProjectsComponent } from '../../components/projects-component/projects-component';
import { BlogComponent } from '../../components/blog-component/blog-component';

@Component({
  selector: 'app-about-component',
  imports: [HeroComponent, TechStackComponent, ProjectsComponent, BlogComponent],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {

}


