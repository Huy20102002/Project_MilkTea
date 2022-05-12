import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-categoryclient',
  templateUrl: './categoryclient.component.html',
  styleUrls: ['./categoryclient.component.css']
})
export class CategoryclientComponent implements OnInit {

  constructor(private ProductService: ProductService,private CategoryService:CategoriesService,private ActivedRoter:ActivatedRoute) { }
  dataProduct: any;
  dataCate:any;
  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }
  getProduct() {
    this.ActivedRoter.params.subscribe(vl=>{
      const {id} =vl;
      this.ProductService.getBycate(id).subscribe(res => {
        const { data } = res;
          this.dataProduct =data;
      })
    })
  
  }
  getCategory(){
    this.CategoryService.getAll().subscribe(res=>{
      const {data}= res;
      this.dataCate =data;
    })
  }
  

}
