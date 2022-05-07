import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService, private LocalStorageService: LocalStorageService, private ProductService: ProductService) { }
  quantityProduct: number = 0;
  dataCart: any;
  dataImage:any;
  ngOnInit(): void {
    this.getCart();
  }
  increasequantity(quantity: any) {
    this.quantityProduct++;
  }
  decreasequantity(quantity: any) {
    if (this.quantityProduct) {
      this.quantityProduct--;

    } else if (this.quantityProduct < 0) {
      this.quantityProduct = 0;
    }
  }
  getCart() {
    const cart = this.LocalStorageService.getLocalStorage("cart");
    this.dataCart = cart;
  }
  sumProduct(){
    const cart = this.LocalStorageService.getLocalStorage("cart");

  }

}
