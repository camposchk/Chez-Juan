import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, MainComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chez-Juan';
}
