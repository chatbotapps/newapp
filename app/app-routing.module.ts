import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsumerProductsComponent} from './productList/consumer-products/consumer-products.component';
import {DairyProductsComponent} from './productList/dairy-products/dairy-products.component';
import {CartComponent} from './cart/cart.component';
import {CategoriesComponent} from './categories/categories.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'dairy-products', component: DairyProductsComponent},
  {path: 'consumer-products', component: ConsumerProductsComponent},
  {path: 'order-details', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
