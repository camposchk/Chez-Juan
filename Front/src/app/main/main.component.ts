import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  addTremorEffect() {
    const textElements = document.querySelectorAll('.tremor-text');
    textElements.forEach(element => {
      element.classList.add('shake');
      element.addEventListener('click', this.abrirModal);
    });
  }

  removeTremorEffect() {
    const textElements = document.querySelectorAll('.tremor-text');
    textElements.forEach(element => {
      element.classList.remove('shake');
      element.removeEventListener('click', this.abrirModal);
    });
  }

  abrirModal() {
    document.getElementById('meuModal')!.style.display = 'block';
  }

  fecharModal() {
    document.getElementById('meuModal')!.style.display = 'none';
  }
}
