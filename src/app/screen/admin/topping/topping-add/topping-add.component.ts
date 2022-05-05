import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToppingService } from 'src/app/service/topping.service';

@Component({
  selector: 'app-topping-add',
  templateUrl: './topping-add.component.html',
  styleUrls: ['./topping-add.component.css']
})
export class ToppingAddComponent implements OnInit {

  constructor(private ToppingService:ToppingService,private router:Router) { }
  formTopping: FormGroup = new FormGroup({
      name: new FormControl(''),
      price: new FormControl('')
  });
  ngOnInit(): void {
  }
  addTopping(){
     this.ToppingService.add(this.formTopping.value).subscribe(res=>{
           this.router.navigate(['admin/topping']);
     })
  }

}
