import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about-component/about-component';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
}, {
    path: 'about',
    component: AboutComponent
}];
