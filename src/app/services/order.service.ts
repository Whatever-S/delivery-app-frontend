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

  getCartItems(): Observable<Product[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(product: Product): void {
    console.log('Removed ', product.name)
    /*const index = this.cartItems.findIndex(item => item._id === product._id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next(this.cartItems);
    }*/
  }

  updateQuantity(product: Product, quantity: number): void {
    console.log('quantity:  ', product.name, quantity)
    /*const index = this.cartItems.findIndex(item => item._id === product._id);
    if (index !== -1) {
      this.cartItems[index].quantity = quantity;
      this.cartItemsSubject.next(this.cartItems);
    }*/
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  submitOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

}
