import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  constructor(private renderer: Renderer2) { }

  scrollToDestination(destinationId: string) {
    const destinationElement = this.renderer.selectRootElement(destinationId);
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


