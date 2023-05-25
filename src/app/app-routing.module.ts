import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
  { path: 'shops', component: ShopsComponent },
  { path: 'cart', component: OrderPageComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
