import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollFunction();
  }

  ngOnInit() {
    // Inicialização, se necessário
  }

  scrollFunction() {
    const header: HTMLElement | null = document.getElementById("header");

    if (header) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}
