import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }



  getCategories() : Observable<any>{
    return this.http.get('https://script.google.com/macros/s/AKfycbzHLstbwnJmw_N2nkYUekMCP4KFE62KeeSjIr6hj7dgYXC0oWw/exec?actionType=getCategory')
  }
}
