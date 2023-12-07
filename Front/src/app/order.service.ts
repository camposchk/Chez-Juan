import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderData } from './order.data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: ApiClientService) { }

  createOrder(data: OrderData) {
    return this.http.post('order/create', data)
      .subscribe(
        response => console.log('Pedido criado com sucesso:', response),
        error => console.error('Erro ao criar pedido:', error)
      );
  }

  getOrdersByUserId(userId: number): Observable<OrderData[]> {
    return this.http.get<OrderData[]>(`order/getByUser/${userId}`);
  }
}
