import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SizeService } from 'src/app/service/size.service';

@Component({
  selector: 'app-size-add',
  templateUrl: './size-add.component.html',
  styleUrls: ['./size-add.component.css']
})
export class SizeAddComponent implements OnInit {

  constructor(private SizeService: SizeService,private route:Router) { }
  formSize: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  })
  ngOnInit(): void {
  }
  addSize(){
  this.SizeService.add(this.formSize.value).subscribe(res=>{
    this.route.navigate(['admin/size']);
  })
  }

}
