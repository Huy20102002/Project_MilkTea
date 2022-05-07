import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private localStorageService:LocalStorageService) { }
  cart:Array<any>=[];
  shipping:any;
  addToCart(newProduct:any,next:any){
    if(this.localStorageService.getLocalStorage("cart")){
      this.cart = this.localStorageService.getLocalStorage("cart");
    }
    const existProduct = this.cart.find((item:any)=>item.id_product===newProduct.id_product && item.id_topping===newProduct.id_topping && item.id_size===newProduct.id_size);
    if(!existProduct){
      this.cart.push(newProduct);
    }else{
      existProduct.quantity+=+newProduct.quantity;
    }
    this.localStorageService.setLocalStorage("cart",this.cart);
    next();
  }
  
}
