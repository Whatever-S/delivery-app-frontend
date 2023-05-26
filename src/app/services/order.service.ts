import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Order, Product } from '../models/shop.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private apiUrl = 'http://localhost:3000/api/v1/order';
  private cartItems: Product[] = [];
  private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }


  /*clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }*/

  submitOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

}
