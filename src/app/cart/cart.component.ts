import { Component, OnInit } from '@angular/core';
import {OrderDetails} from '../model/orderdetails';
import {CartItem} from '../model/cartItems';
import {LocalstorageService} from '../services/localstorage.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];
  productName: string;
  orderDetails:any =[];
  count: number;
  amount: number;
  constructor(private ls: LocalstorageService) { }

  ngOnInit() {
    console.log(localStorage.getItem('cartItem'))
    let cart: any = JSON.parse((localStorage.getItem('cartItem')))
    for(var i=0; i< cart.length; i++ )
    {
     this.items.push(cart[i]);
    
    }
    this.amount = this.ls.loadCart()
    console.log(this.amount)
  }

   getOrderDetails() {
   console.log(localStorage.getItem('cartItem'))


   }

add(product: Product){
  this.ls.addToCart(product)
  this.amount += product.price
  console.log(this.amount)
}
remove(product: Product) {
 this.ls.remove(product)
  this.amount -= product.price
  console.log(this.amount)
}

}
