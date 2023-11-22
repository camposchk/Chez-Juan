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

  scrollToDestination() {
    const destinationElement = this.renderer.selectRootElement('#destination');
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
