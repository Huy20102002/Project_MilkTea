import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideService } from 'src/app/service/slide.service';
@Component({
  selector: 'app-edit-slide',
  templateUrl: './edit-slide.component.html',
  styles: [
  ]
})
export class EditSlideComponent implements OnInit {
  formSlide: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  })
  constructor(private SlideService:SlideService,private route:Router,private ActivedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSlide();
  }
  getSlide(){
    this.ActivedRoute.params.subscribe(res=>{
      const { id } = res;
      this.SlideService.get(id).subscribe(value=>{
        this.formSlide.patchValue(value);
      })
    })
  }
  editSlide(){
    this.ActivedRoute.params.subscribe(res=>{
      const { id } = res;
      this.SlideService.edit(id,this.formSlide.value).subscribe(value=>{
        // this.formSlide.patchValue(value);
        this.route.navigate(['/admin/slide']);
      })
    })
  }

}
