import { Injectable } from '@angular/core';
import { ProductData } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductData[] = []; 

  constructor() { }

  addToCart(product: ProductData) {
    this.items.push(product);
  }

  getItems(): ProductData[] {
    return this.items;
  }

  clearCart(): ProductData[] {
    this.items = [];
    return this.items;
  }
}


