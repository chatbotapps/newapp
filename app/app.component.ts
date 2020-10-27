import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './model/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];
  constructor (private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get<any>('https://script.google.com/macros/s/AKfycbzHLstbwnJmw_N2nkYUekMCP4KFE62KeeSjIr6hj7dgYXC0oWw/exec?actionType=getItems').subscribe(
      data => {
        this.products = data;
      }
    )

  }
}
