import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CouponData } from './coupon.data';
import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  constructor(private http: ApiClientService) { }

  cadastrar(data: CouponData) {
    this.http.post('coupon/cadastrar', data)
      .subscribe(response => console.log(response))
  }

  buscarCupons(): Observable<CouponData[]> {
    return this.http.get<CouponData[]>('coupon/buscar');
  }

  verificarCupom(codigo: string): Observable<CouponData> {
    return this.http.get<CouponData>(`coupon/verificar/${codigo}`);
  }
}
