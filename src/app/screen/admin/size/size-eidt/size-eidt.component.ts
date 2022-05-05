import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SizeService } from 'src/app/service/size.service';
@Component({
  selector: 'app-size-eidt',
  templateUrl: './size-eidt.component.html',
  styleUrls: ['./size-eidt.component.css']
})
export class SizeEidtComponent implements OnInit {

  constructor(private SizeService: SizeService,private route:Router,private activatedRoute:ActivatedRoute) { }
  formSize: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl('')
  })
  ngOnInit(): void {
    this.getSize();
  }
  getSize(){
    this.activatedRoute.params.subscribe(res=>{
      const {id} =res;
      this.SizeService.get(id).subscribe(res=>{
        this.formSize.patchValue(res)
      })
    })
  }
  editSize(){
    this.activatedRoute.params.subscribe(res=>{
      const {id} =res;
      this.SizeService.edit(id,this.formSize.value).subscribe(res=>{
        this.route.navigate(['admin/size']);

      })
    })
  }

}
