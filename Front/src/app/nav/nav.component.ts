import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  addTremorEffect() {
    const textElements = document.querySelectorAll('.tremor-text');
    textElements.forEach(element => {
      element.classList.add('shake');
    });
  }

  showFiller = false;

  constructor(private renderer: Renderer2) { }

  scrollToDestination(destinationId: string) {
    const destinationElement = this.renderer.selectRootElement(destinationId);
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


