import { Injectable } from '@angular/core';
import { Product } from '../models/shop.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Product[] = [];

  constructor() { }

  getCartItems(): Product[] {
    console.log(this.cartItems)
    return this.cartItems;
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find((item) => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.name === product.name);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  decreaseQuantity(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    }
  }

  increaseQuantity(product: Product) {
    const existingProduct = this.cartItems.find(item => item.name === product.name);
    if (existingProduct) {
      if (existingProduct.quantity < 10) {
        existingProduct.quantity++;
      }
    }
  }
}
