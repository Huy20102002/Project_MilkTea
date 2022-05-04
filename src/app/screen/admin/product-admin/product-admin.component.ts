import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  constructor(private productService: ProductService,private categoryService:CategoriesService) { }
  dataCate:any;
  dataProduct:any;
  ngOnInit(): void {
  this.getProduct();
  }
  getProduct(){
    this.productService.getAll()
    .subscribe(res=>{
      const {data}= res;
      this.dataProduct =data; 
    })
  }
  deleteProduct(id:any){
    this.dataProduct = this.dataProduct.filter((item:any)=>item.id != id);
    this.productService.delete(id)
    .subscribe(res=>{
         
    })
  }

}
