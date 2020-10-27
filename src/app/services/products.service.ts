import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }




  getProducts() : Observable<any> {
    return this.http.get('https://script.google.com/macros/s/AKfycbzHLstbwnJmw_N2nkYUekMCP4KFE62KeeSjIr6hj7dgYXC0oWw/exec?actionType=getItems')
  }
}
