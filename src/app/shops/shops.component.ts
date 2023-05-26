import { Component, OnInit  } from '@angular/core';
import { Shop, Product } from '../models/shop.interface';
import { ShopsServerService } from '../services/shops.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shops: Shop[] = [];
  selectedShop: Shop | null = null;

  constructor(private shopsServerService: ShopsServerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getShops();
  }

  getShops(): void {
    this.shopsServerService.getAllShops().subscribe(
      (shops: Shop[]) => {
        this.shops = shops;
      },
      (error) => {
        console.error('Error fetching shops:', error);
      }
    );
  }

  selectShop(shop: Shop): void {
    this.selectedShop = shop;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    //console.log('Added')
  }
}
