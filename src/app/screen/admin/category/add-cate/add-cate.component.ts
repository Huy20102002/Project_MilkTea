import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor(private Categories: CategoriesService, private router: Router) { }
  formCate: FormGroup = new FormGroup({
    name: new FormControl('', [

    ])
  })
  ngOnInit(): void {
  }
  add() {
    this.Categories.add(this.formCate.value)
      .subscribe(res => {
        this.router.navigate(['/admin/danhmuc']);
      })
  }

}
