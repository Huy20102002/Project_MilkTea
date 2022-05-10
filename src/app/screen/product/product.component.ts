import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private ProductService: ProductService,private CategoryService:CategoriesService) { }
  dataProduct: any;
  dataCate:any;
  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }
  getProduct() {
    this.ProductService.getAll().subscribe(res => {
      const { data } = res;
        this.dataProduct =data;
    })
  }
  getCategory(){
    this.CategoryService.getAll().subscribe(res=>{
      const {data}= res;
      this.dataCate =data;
    })
  }

}
