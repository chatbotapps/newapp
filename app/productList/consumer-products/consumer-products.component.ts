import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../model/product';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-consumer-products',
  templateUrl: './consumer-products.component.html',
  styleUrls: ['./consumer-products.component.css']
})
export class ConsumerProductsComponent implements OnInit {
  consumerProduct: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
    .pipe
    (map(items => items.filter(item => item.category === 'Consumer Products') ))
    .subscribe(data => this.consumerProduct = data)
  }

}
