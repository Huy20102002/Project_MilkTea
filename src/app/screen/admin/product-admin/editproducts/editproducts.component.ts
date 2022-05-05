import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  constructor(private categoryService: CategoriesService, private ProductService: ProductService,
    private route: Router, private activatedRoute: ActivatedRoute) { }
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
    this.getProduct();
  }
  getDataCate() {
    this.categoryService.getAll()
      .subscribe(res => {
        const { data } = res;
        this.DataCate = data;
      })
  }
  getProduct() {
    this.activatedRoute.params.subscribe(res => {
      const {id}= res;
      this.ProductService.getId(id)
      .subscribe(res=>{
        this.formProduct.patchValue(res)
      })
    })
  }
  updateProduct() {
    this.activatedRoute.params.subscribe(res => {
      const {id}= res;
      this.ProductService.update(id,this.formProduct.value)
      .subscribe(res=>{
        // this.formProduct.patchValue(res)
        this.route.navigate(['/admin/sanpham']);
      })
    })
  }

}
