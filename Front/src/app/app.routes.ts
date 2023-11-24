import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'nav', component: NavComponent },
    { path: 'main', component: MainComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent }
];
