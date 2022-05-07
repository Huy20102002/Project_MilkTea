import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {

  constructor() { }
  quantityProduct: number = 0;
  ngOnInit(): void {
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
  
}
