import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  backend = 'http://localhost:5106/'

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(this.backend + url);
  }

  post<T>(url: string, obj: any) {
    return this.http.post<T>(this.backend + url, obj);
  }
}
