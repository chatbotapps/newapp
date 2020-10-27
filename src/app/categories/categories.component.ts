import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: [];
  heading: string;
  totalAmount: number;
  constructor(private http: HttpClient , private categoryService: CategoriesService, private ls: LocalstorageService) { }

  ngOnInit() {
  this.http.get('https://script.google.com/macros/s/AKfycbzHLstbwnJmw_N2nkYUekMCP4KFE62KeeSjIr6hj7dgYXC0oWw/exec?actionType=getDesign')
  .subscribe( data => {
    this.heading = data[0].headline;
  })
this.categoryService.getCategories()
.subscribe( data => this.categories = data)
   this.totalAmount = this.ls.loadCart();
  
  }

}
