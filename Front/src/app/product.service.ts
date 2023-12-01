import { Injectable } from '@angular/core';
import { ProductData } from './product-data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: ApiClientService) { }

  cadastrar(data: ProductData)
  {
    this.http.post('product/cadastrar', data)
      .subscribe(response => console.log(response))
  }

  login(data: ProductData, callback: any)
  {
    this.http.post('product/cadastrar', data)
      .subscribe(
        response => {
          callback(response)
        },
        error => { 
          callback(null)
        })
  }
}
