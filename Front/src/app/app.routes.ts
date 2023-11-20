import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'nav', component: NavComponent },
    { path: 'main', component: MainComponent }
];
