import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private CategoriService: CategoriesService,private router:Router) { }
  listCate: any;
  keyword:any;
  ngOnInit(): void {
    this.get();
  }
  get(searchkey:string="") {
    this.CategoriService.getAll(searchkey).subscribe(res => {
        const {data}= res;
        this.listCate = data;
    })
  }
  deleteCate(id:any){
    this.listCate = this.listCate.filter((items:any) => items.id != id);
    this.CategoriService.deleteCate(id)
    .subscribe(res=>{
    })
  }
  search(){
    this.get(this.keyword);
  }

}
