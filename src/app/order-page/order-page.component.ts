import { Component } from '@angular/core';
import { Order, Product } from '../models/shop.interface';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  cartItems: Product[] = [];
  userInfoForm: FormGroup;
  totalPrice: number = 0;

  constructor(private orderService: OrderService, private cartService: CartService) {
    this.userInfoForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{7}')]),
      address: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)])
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  decreaseQuantity(product: Product) {
    this.cartService.decreaseQuantity(product);
    this.calculateTotalPrice();
  }

  increaseQuantity(product: Product) {
    this.cartService.increaseQuantity(product);
    this.calculateTotalPrice();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.calculateTotalPrice();
  }

  submitOrder() {
    console.log(this.cartItems)
    if (this.userInfoForm.valid) {
      console.log("good")
    }
  }

  private calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
}
