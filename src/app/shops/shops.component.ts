import { Component, OnInit  } from '@angular/core';
import { Shop } from '../models/shop.interface';
import { ShopsServerService } from '../services/shops-server.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shops: Shop[] = [];
  selectedShop: Shop | null = null;

  constructor(private shopsServerService: ShopsServerService) { }

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
}
