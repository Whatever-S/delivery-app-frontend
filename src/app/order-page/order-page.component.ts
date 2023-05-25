import { Component } from '@angular/core';
import { Product } from '../models/shop.interface';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  cartItems: Product[] = [];
  email: string = '';
  phoneNumber: string = '';
  address: string = '';

  constructor(private orderService: OrderService, private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    console.log('sasad', this.cartItems)
  }

  removeFromCart(product: Product) {
    this.orderService.removeFromCart(product);
  }

  updateQuantity(product: Product, quantity: number) {
    this.orderService.updateQuantity(product, quantity);
  }

  submitOrder() {
    const order = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      products: this.cartItems
    };

    this.orderService.submitOrder(order).subscribe(
      response => {
        console.log('Order submitted successfully:', response);
        this.cartItems = [];
        this.email = '';
        this.phoneNumber = '';
        this.address = '';
      },
      error => {
        console.error('Error submitting order:', error);
      }
    );
  }
}
