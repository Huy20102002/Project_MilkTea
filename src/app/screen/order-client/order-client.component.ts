import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { DivisionService } from 'src/app/service/division.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-client',
  templateUrl: './order-client.component.html',
  styleUrls: ['./order-client.component.css']
})
export class OrderClientComponent implements OnInit {

  constructor(private divisonService: DivisionService,private Route:Router,
    private CartService: CartService, private LocalStorage: LocalStorageService, private orderService: OrderService) { }
  dataDivison: any;
  dataTown: any;
  dataDistrict: any;
  CodeTown: any;
  dataOrder: any;
  sum: number = 0;
  id_order: any;
  // keyworddistric:any;
  // keyWord:any;
  formOrder: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl(''),
    email: new FormControl(''),
    province: new FormControl(''),
    district: new FormControl(''),
    wards: new FormControl(''),
    address: new FormControl(''),
    sumprice: new FormControl(''),
    shipping: new FormControl(''),
    voucher: new FormControl(''),
    additional: new FormControl(''),
  });
  formcart: any = {
    id_order: '',
    id_product: '',
    name: '',
    price: '',
    image: '',
    id_size: '',
    size_name: '',
    id_topping: '',
    topping_name: '',
    quantity: 0,
    sumprice: '',
    id_user: ''
  }
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
  getOrder() {
    const data = this.LocalStorage.getLocalStorage("cart");
    this.dataOrder = data;
  }
  getSum() {
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
  addOrder() {
    let id = 0;
    const cartlist = this.LocalStorage.getLocalStorage("cart");
    this.formOrder.value.sumprice = this.sumPriceCart();
    this.formOrder.value.shipping = 0;
    this.formOrder.value.voucher = 0;
    this.orderService.addOrder(this.formOrder.value).subscribe(res => {
      const { response } = res;
      this.id_order = response.id;
      cartlist.forEach((cart: any) => {
        this.orderService.addCart({
          id_order: this.id_order,
          id_product: cart.id_product,
          name: cart.name,
          price: cart.price,
          image: cart.image,
          id_size: cart.id_size,
          size_name: cart.size_name,
          id_topping: cart.id_topping,
          topping_name: cart.topping_name,
          quantity: cart.quantity,
          sumprice: cart.sumprice,
          id_user: cart.id_user
        }).subscribe(res => {
           this.Route.navigate(['/thanhcong']);
        })
      })
    })




  }


}
