import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { TechStackComponent } from '../../components/tech-stack-component/tech-stack-component';
import { ProjectsComponent } from '../../components/projects-component/projects-component';
import { BlogComponent } from '../../components/blog-component/blog-component';
import { AboutComponent } from '../../components/about-component/about-component';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, AboutComponent,
    TechStackComponent, ProjectsComponent, BlogComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}


