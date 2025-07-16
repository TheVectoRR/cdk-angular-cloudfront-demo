import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VectoritWebsiteComponent } from './vectorit-website.component/vectorit-website.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-app';
}
