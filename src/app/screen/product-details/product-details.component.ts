import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private ProductService: ProductService, private Activated: ActivatedRoute) { }
  selectedColor: any;
  dataColor:any;
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
    this.getProduct();
  }
  selectedSize(a: any) {
    this.valueColorSize = a;
    console.log(a)
  }
  selectedTopping(a: any) {
    this.valueColorTopping = a;
  }
  getProduct() {
    this.Activated.params.subscribe(res => {
      const { id } = res;
      this.ProductService.getName(id).subscribe(value => {
        console.log(value);
      });
    });
  }


}
