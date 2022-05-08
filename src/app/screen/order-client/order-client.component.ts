import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DivisionService } from 'src/app/service/division.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {

  constructor(private divisonService: DivisionService,private CartService:CartService,private LocalStorage:LocalStorageService) { }
  dataDivison: any;
  dataTown: any;
  dataDistrict: any;
  CodeTown: any;
  dataOrder:any;
  sum:number=0;
  // keyworddistric:any;
  // keyWord:any;
  formkey = {
    keyworddistric: '',
    keyWord: ''
  }
  ngOnInit(): void {
    this.getAllTp();
    this.getTown();
    this.getOrder();
    this.getSum();
  }
  getOrder(){
    const data= this.LocalStorage.getLocalStorage("cart");
    this.dataOrder = data;
  }
  getSum(){
    this.sum = this.sumPriceCart();
  }
  sumPriceCart() {
    // const dataCart = this.localStorageService.getLocalStorage("cart");
    let sum = 0;
    this.dataOrder.forEach((element: any) => {
      sum += element.sumprice;
    });
    return sum;
  }
  getAllTp() {
    this.divisonService.getAll().subscribe(value => {
      this.dataDivison = value;
    })
  }
  getTown(keyWord: string = '') {
    this.divisonService.getTown(keyWord).subscribe(res => {
      const { districts } = res;
      this.dataTown = districts;
    })
  }
  getDistrict(keyWord: string = '') {
    this.divisonService.getWards(keyWord).subscribe(res => {
      const { wards } = res;
      this.dataDistrict = wards;
    })
  }
  changeTown() {
    this.getTown(this.formkey.keyWord);
  }
  changeDistrict() {
    this.getDistrict(this.formkey.keyworddistric);
  }


}
