import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { DairyProductsComponent } from './productList/dairy-products/dairy-products.component';
import { ConsumerProductsComponent } from './productList/consumer-products/consumer-products.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './productList/fruits/fruits.component';
import { VegetablesComponent } from './productList/vegetables/vegetables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SetwidthDirective } from './setwidth.directive';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DairyProductsComponent,
    ConsumerProductsComponent,
    CartComponent,
    FruitsComponent,
    VegetablesComponent,
    SetwidthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CategoriesService,
    ProductsService,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
