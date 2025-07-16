import { Routes } from '@angular/router';
import { VectoritWebsiteComponent } from './vectorit-website.component/vectorit-website.component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
}, {
    path: 'home',
    component: VectoritWebsiteComponent
}];
