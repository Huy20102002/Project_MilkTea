import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  selectedColor: any;
  valueColorSize: any;
  valueColorTopping: any;
  // sizenho: number = 1;
  // sizevua: number = 2;
  // sizelon: number = 3;
  formSize: Array<any> = [
    1, 2, 3
  ]
  textSize: Array<any> = [
    'Nhỏ', 'Vừa + 6000 VND', 'Lớn + 10000 VND'
  ]
  formTopping: Array<any> = [
    1, 2, 3, 4, 5
  ]
  textTopping: Array<any> = [
    'Trân châu trắng + 10.000 VNĐ', ' Sữa tươi không đường + 10.000 VNĐ',
    'Đào miếng + 10.000 VNĐ', 'Thạch dừa + 10.000 VNĐ', 'Sữa tươi không đường + 10.000 VNĐ'
  ]
  ngOnInit(): void {

  }
  selectedSize(a: any) {
    this.valueColorSize = a;
    console.log(a)
  }
  selectedTopping(a: any) {
    this.valueColorTopping = a;
  }


}
