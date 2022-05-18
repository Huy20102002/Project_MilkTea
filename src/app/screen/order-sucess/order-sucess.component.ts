import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-order-sucess',
  templateUrl: './order-sucess.component.html',
  styleUrls: ['./order-sucess.component.css']
})
export class OrderSucessComponent implements OnInit {

  constructor(private localStorage:LocalStorageService) { }
  cart: Array<any> = [];
  ngOnInit(): void {
    this.localStorage.setLocalStorage("cart",this.cart);
  }
  

}
