import { Injectable } from '@angular/core';
import { Product } from '../models/shop.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    product.quantity = 1
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    console.log(this.cartItems)
    return this.cartItems;
  }
}
