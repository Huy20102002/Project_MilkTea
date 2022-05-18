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
  iconloading:any;
  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
    this.iconloading = document.getElementById("loading");
    this.loading();
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


showloading(){
  this.iconloading.style.display ="block";
}
hideloading(){
  this.iconloading.style.display= "none";
}
loading(){
  this.showloading();
  setTimeout(()=>{
    this.hideloading();
  },800)
}

}
