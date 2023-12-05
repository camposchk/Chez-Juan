import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ProductData } from './../product-data';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { CartService } from './../cart.service';

@Component({
  selector: 'app-main',
  standalone: true, 
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  categories = [
    { id: 0, name: 'Couverts' },
    { id: 1, name: 'Entradas' },
    { id: 2, name: 'Pratos Principais' },
    { id: 3, name: 'Sobremesas' },
    { id: 4, name: 'Vinhos' }
  ];

  produtos: ProductData[] = [];

  produto: any;

  constructor(private productService: ProductService, private cartService: CartService) { }

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

  getProductRows(categoryId: number) {
    const filteredProducts = this.produtos.filter(produto => produto.categoria === categoryId);
    const rows = [];
    for (let i = 0; i < filteredProducts.length; i += 4) {
        rows.push(filteredProducts.slice(i, i + 4));
    }
    return rows;
  }

  addToCart(produto: ProductData) {
    this.cartService.addToCart(produto);
  }

  addTremorEffect() {
    const textElements = document.querySelectorAll('.tremor-text');
    textElements.forEach(element => {
      element.classList.add('shake');
      element.addEventListener('click', this.abrirModal);
      console.log("ativado");
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
