import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<any> = [];
  shipping: any;
  constructor(private localStorageService: LocalStorageService,private http:HttpClient) {

  }

  addToCart(newProduct: any, next: any) {
    this.localStorageService.setLocalStorage("cart",this.cart);
    this.cart = this.localStorageService.getLocalStorage("cart");
    const existProduct = this.cart.find((item: any) => item.id_product === newProduct.id_product && item.id_topping === newProduct.id_topping && item.id_size === newProduct.id_size);
    if (!existProduct) {
      this.cart.push(newProduct);
    } else {
      existProduct.quantity += +newProduct.quantity;
    }
    this.localStorageService.setLocalStorage("cart", this.cart);
    next();
  }
  increaseQuantityCart(Product: any, next: any) {
    this.cart = this.localStorageService.getLocalStorage("cart");
    const increasequantity = this.cart.find((item: any) => item.id_product === Product.id_product && item.id_topping === Product.id_topping && item.id_size === Product.id_size);
    increasequantity.quantity++;
    increasequantity.sumprice = increasequantity.price * increasequantity.quantity;
    this.localStorageService.setLocalStorage("cart", this.cart);
    next();
  }
  decreseQuantityCart(Product: any, next: any) {
    this.cart = this.localStorageService.getLocalStorage("cart");
    const currenProduct = this.cart.find((item: any) => item.id_product === Product.id_product && item.id_topping === Product.id_topping && item.id_size === Product.id_size);
    if (currenProduct.quantity > 0) {
      currenProduct.quantity--;
    }
    if (currenProduct.quantity < 1) {
      const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này");
      if (confirm) {
        this.cart = this.cart.filter((item: any) => item.id_product != Product.id_product && item.id_topping != Product.id_topping && item.id_size != Product.id_size)
      }
    }
    currenProduct.sumprice = currenProduct.price * currenProduct.quantity;
    this.localStorageService.setLocalStorage("cart", this.cart);
    next();
  }

  removeCart(item:any){
    this.cart = this.localStorageService.getLocalStorage("cart");
    this.cart = this.cart.filter((value: any) => value.id_product != item.id_product || value.id_topping != item.id_topping || value.id_size != item.id_size);
    this.localStorageService.setLocalStorage("cart",  this.cart);
    this.cart = this.cart;
  
    return this.cart;
  }

  
}
