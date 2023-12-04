import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from './product-data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: ApiClientService) { }

  cadastrar(data: ProductData) {
    this.http.post('product/cadastrar', data)
      .subscribe(response => console.log(response))
  }

  buscarProdutos(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>('product/buscar');
  }
}
