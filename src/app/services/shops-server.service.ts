import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopsServerService {

  private apiUrl = 'http://localhost:3000/api/v1/shops';

  constructor(private http: HttpClient) { }

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiUrl);
  }
}
