import { Injectable } from '@angular/core';
import { CartItem } from '../model/cartItems';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  items: CartItem[] = [];
  total: number;

  constructor(){}

  

  addToCart(product) {

    var item: CartItem = {
      product: product,
      quantity: 1
    };
    if (localStorage.getItem('cartItem') == null) {
      //let cart: any = [];
      //cart.push(JSON.stringify(item));
      this.items.push(item);
      localStorage.setItem('cartItem', JSON.stringify(this.items));
      this.total += item.product.price * item.quantity;
      console.log('comng total',this.total)
      
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cartItem'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = cart[i];
        // console.log('cart item product', item.product.productName)
        // console.log('product productname', product.productName)
        if (item.product.productName == product.productName) {
          index = i;
          // console.log('index', index)
          item.quantity += 1;
          cart[i] = item;
          // console.log(cart)
          localStorage.setItem('cartItem', JSON.stringify(cart));
          break;

        }
        this.total += item.product.price * item.quantity;
        console.log('comng total 2s' ,this.total)
        this.loadCart();
      }
      if (index == -1) {
        // cart.push(JSON.stringify(product));
        // localStorage.setItem('cart', JSON.stringify(cart));
        // localStorage.setItem("cartItem",JSON.stringify(item));
       // console.log('first time')
        this.items.push(item)
        localStorage.setItem("cartItem", JSON.stringify(this.items));
        this.total += item.product.price * item.quantity;
        console.log('comng total 3',this.total)
      } else {
        /* cart[index];
         console.log(cart[index])
         localStorage.getItem('cartItem')
         item.quantity +=1;
         // itemfound.quantity += 1;
         cart[index] = JSON.stringify(item);
         this.items.push(item)
         // localStorage.setItem("cart", JSON.stringify(cart));
         localStorage.setItem("cartItem", JSON.stringify(this.items)); */
      }
      this.loadCart();
    }

  }
  
  loadCart(): number {

    this.total = 0;
    this.items = [];
  //  console.log(JSON.parse((localStorage.getItem('cartItem'))));
    let cart: any = JSON.parse((localStorage.getItem('cartItem')));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(JSON.stringify(cart[i]));
    //  console.log(item)
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
     // console.log('printing', item)
      this.total += item.product.price * item.quantity;
      console.log(this.total);
      return this.total;
    }
  }

   remove(product): void {
    let cart: any = JSON.parse(localStorage.getItem('cartItem'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: CartItem = cart[i];
    //  console.log('cart item product', item.product.productName)
    //  console.log('product productname', product.productName)
      if (item.product.productName == product.productName) {
        index = i;
       // console.log('index', index)
        item.quantity -= 1;
        cart[i] = item;
       // console.log(cart)
        localStorage.setItem('cartItem', JSON.stringify(cart));
        break;
        this.loadCart();
      }
    }
    //this.loadCart();
  }

  removeProduct(product): void {


    let cart: any = JSON.parse(localStorage.getItem('cartItem'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: CartItem = cart[i];
     // console.log('cart item product', item.product.productName)
     // console.log('product productname', product.productName)
      if (item.product.productName == product.productName) {
        index = i;
      //  console.log('index', index)
        this.items = cart
        this.items.splice(index, 1)
        localStorage.setItem('cartItem', JSON.stringify(this.items));
        break;

      }
    }
    //this.loadCart();
  }
  getQuantity(product): number {


    let cart: any = JSON.parse(localStorage.getItem('cartItem'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: CartItem = cart[i];
      
      if (item.product.productName == product.productName) {
       return item.quantity;
        break;
  
      }
    }
    //this.loadCart();
  }



}



// getTotal(){
//   let total = 0;
//   for (var i = 0; i < this.cartItems.length; i++) {
//       if (this.cartItems[i].amount) {
//           total += this.cartItems[i].amount * this.cartItems[i].quantity;
//           this.totalamount = total;
//       }
//   }
//   return total;
// }

