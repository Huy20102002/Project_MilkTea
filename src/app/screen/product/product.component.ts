import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ProductService: ProductService) { }
  dataProduct: any;
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.ProductService.getAll().subscribe(res => {
      const { data } = res;
        this.dataProduct =data;
    })
  }

}
