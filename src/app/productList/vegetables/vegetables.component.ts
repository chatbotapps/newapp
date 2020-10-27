import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';
import { map, filter } from 'rxjs/operators';
import { CartItem } from '../../model/cartItems';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  //@Input('cartItems') cartItems: CartItem;
  total: number;
  items: CartItem[] = [];
  //product: Product;
  //antity: number;

  vegetables: Product[];
  productCount: number = 0;

  constructor(private categoriesService: CategoriesService,
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts()
      .pipe
      (map(items => items.filter(item => item.category === 'Vegetables')))
      .subscribe(data => this.vegetables = data)
  }



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
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cartItem'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = cart[i];
        console.log('cart item product', item.product.productName)
        console.log('product productname', product.productName)
        if (item.product.productName == product.productName) {
          index = i;
          console.log('index', index)
          item.quantity += 1;
          cart[i] = item;
          console.log(cart)
          localStorage.setItem('cartItem', JSON.stringify(cart));
          break;

        }
        this.loadCart();
      }
      if (index == -1) {
        // cart.push(JSON.stringify(product));
        // localStorage.setItem('cart', JSON.stringify(cart));
        // localStorage.setItem("cartItem",JSON.stringify(item));
        console.log('first time')
        this.items.push(item)
        localStorage.setItem("cartItem", JSON.stringify(this.items));
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

  loadCart(): void {

    this.total = 0;
    this.items = [];
    console.log(JSON.parse((localStorage.getItem('cartItem'))));
   let cart: any = JSON.parse((localStorage.getItem('cartItem')));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(JSON.stringify(cart[i]));
      console.log(item)
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      console.log('printing', item)
      this.total += item.product.price * item.quantity;
      console.log(this.total);
    }
  }

  remove(product): void {
    
    
      let cart: any = JSON.parse(localStorage.getItem('cartItem'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = cart[i];
        console.log('cart item product', item.product.productName)
        console.log('product productname', product.productName)
        if (item.product.productName == product.productName) {
          index = i;
          console.log('index', index)
          item.quantity -= 1;
          cart[i] = item;
          console.log(cart)
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
      console.log('cart item product', item.product.productName)
      console.log('product productname', product.productName)
      if (item.product.productName == product.productName) {
        index = i;
        console.log('index', index)
        this.items=cart
        this.items.splice(index,1)
        localStorage.setItem('cartItem', JSON.stringify(this.items));
        break;

      }
    }
  //this.loadCart();
}
}

/*loadCart(): void {
this.total = 0;
this.items = [];
let cart = JSON.parse(localStorage.getItem('cart'));
for (var i = 0; i < cart.length; i++) {
let item = JSON.parse(cart[i]);
this.items.push({
  product: item.product,
  quantity: item.quantity
});
this.total += item.product.price * item.quantity;
}
}

remove(id: string): void {
let cart: any = JSON.parse(localStorage.getItem('cart'));
let index: number = -1;
for (var i = 0; i < cart.length; i++) {
let item: Item = JSON.parse(cart[i]);
if (item.product.id == id) {
  cart.splice(i, 1);
  break;
}
}
localStorage.setItem("cart", JSON.stringify(cart));
this.loadCart();
}

  }

  removeFromCart() {
    if (this.productCount > 0)
      this.productCount -= 1;
  } */


