import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SlideService } from 'src/app/service/slide.service';

@Component({
  selector: 'app-add-slide',
  templateUrl: './add-slide.component.html',
  styleUrls: ['./add-slide.component.css']
})
export class AddSlideComponent implements OnInit {
  formSlide: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  })
  constructor(private SlideService:SlideService,private route:Router) { }

  ngOnInit(): void {
  }
  addSlide(){
   this.SlideService.add(this.formSlide.value).subscribe(res=>{
        this.route.navigate(['admin/slide']);
   })
  }

}
