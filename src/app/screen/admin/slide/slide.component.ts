import { Component, OnInit } from '@angular/core';
import { SlideService } from 'src/app/service/slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  dataSlide: any;
  constructor(private SlideService: SlideService) { }

  ngOnInit(): void {
    this.getSlide();
  }
  getSlide() {
    this.SlideService.getAll().subscribe(res => {
      const { data } = res;
      this.dataSlide = data;
    })
  }
  deleteSlide(id: any) {
    this.dataSlide = this.dataSlide.filter((item: any) => item.id != item.id);
    this.SlideService.delete(id).subscribe(res => {

    });
  }

}
