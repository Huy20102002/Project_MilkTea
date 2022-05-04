import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private CategoryService:CategoriesService,private route:ActivatedRoute,private router:Router) { }
  formCate: FormGroup = new FormGroup({
    name: new FormControl('',[

    ])
  })
  ngOnInit(): void {
    this.getCateId()
  }
  getCateId(){
    this.route.params.subscribe(par=>{
      const {id} = par;
      this.CategoryService.getId(id).subscribe(res=>{
        this.formCate.patchValue(res);
      })

    })
  }
  update(){
    this.route.params.subscribe(par=>{
      const {id} = par;
      this.CategoryService.updateCate(id,this.formCate.value).subscribe(res=>{
       this.router.navigate(['/admin/danhmuc']);
      })

    })
  }

}
