import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ProductData } from './../product-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  produtos: ProductData[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.productService.buscarProdutos().subscribe(
      (produtos: ProductData[]) => {
        this.produtos = produtos;
      },
      error => console.error(error)
    );
  }

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
