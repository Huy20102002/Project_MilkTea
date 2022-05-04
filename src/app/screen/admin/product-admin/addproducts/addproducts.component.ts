import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private categoryService: CategoriesService, private ProductService: ProductService,private route:Router) { }
  formProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    idCate: new FormControl(''),
    status: new FormControl(''),
    image: new FormControl('')
  })
  DataCate: any;
  ngOnInit(): void {
    this.getDataCate();
  }
  getDataCate() {
    this.categoryService.getAll()
      .subscribe(res => {
        const { data } = res;
        this.DataCate = data;
      })
  }
  addProduct() {
    this.ProductService.addProduct(this.formProduct.value)
      .subscribe(res => {
         this.route.navigate(['/admin/sanpham']);
      })
  }

}
