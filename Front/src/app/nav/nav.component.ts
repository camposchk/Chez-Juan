import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
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
