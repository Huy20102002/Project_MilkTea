import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToppingService } from 'src/app/service/topping.service';
@Component({
  selector: 'app-topping-edit',
  templateUrl: './topping-edit.component.html',
  styleUrls: ['./topping-edit.component.css']
})
export class ToppingEditComponent implements OnInit {
  constructor(private ToppingService: ToppingService, private router: Router, private ActivedRoute: ActivatedRoute) { }
  formTopping: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  });
  ngOnInit(): void {
    this.getTopping();
  }
  getTopping() {
    this.ActivedRoute.params.subscribe(res => {
      const { id } = res;
      this.ToppingService.get(id).subscribe(value => {
        this.formTopping.patchValue(value)
      })
    })
  }
  editTopping(){
    this.ActivedRoute.params.subscribe(res => {
      const { id } = res;
      this.ToppingService.edit(id, this.formTopping.value).subscribe(value => {
        this.router.navigate(['admin/topping'])
      })
    })
  }
}


