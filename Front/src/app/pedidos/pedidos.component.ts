import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { OrderData } from '../order.data';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit{
  pedidos: OrderData[] = [];

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit() {
    this.getPedidosDoUsuario();
  }

  getPedidosDoUsuario() {
    const userId = +localStorage.getItem('Id')!;
    this.orderService.getOrdersByUserId(userId).subscribe(
      (data) => {
        console.log('Dados recebidos:', data);
        this.pedidos = data;
      },
      (error) => {
        console.error('Erro ao buscar os pedidos:', error);
      }
    );
  }

  return()
  {
    this.router.navigate(["/home"]);
  }
}
