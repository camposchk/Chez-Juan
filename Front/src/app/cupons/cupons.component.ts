import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CouponService } from '../coupon.service';
import { CouponData } from '../coupon.data';


@Component({
  selector: 'app-cupons',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './cupons.component.html',
  styleUrl: './cupons.component.css'
})
export class CuponsComponent implements OnInit {
  cupons: CouponData[] = [];

  constructor(private router: Router, private couponService: CouponService) { }

  ngOnInit() {
    this.couponService.buscarCupons().subscribe(
      (dados) => {
        this.cupons = dados;
      },
      (erro) => {
        console.error('Erro ao buscar cupons', erro);
      }
    );
  }

  return()
  {
    this.router.navigate(["/home"]);
  }
}
