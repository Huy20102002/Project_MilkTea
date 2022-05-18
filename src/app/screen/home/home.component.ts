import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { SlideService } from 'src/app/service/slide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Array<any> = [];
  dataProduct: any;
  iconloading: any;
  obj:any=[];
  imagess = [
    { path: 'https://intphcm.com/data/upload/poster-tra-sua-dac-sac.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },
    { path: 'https://nhipsongvanphong.com/wp-content/uploads/2021/10/beautiful-milk-tea-background-download-beautiful-milk-tea-background-here-picture-45-sHhxeks8H.jpg' },

  ]
  constructor(private ProductService: ProductService, private SlideService: SlideService) { }
  ngOnInit(): void {
    this.getproductHome();
    this.iconloading = document.getElementById("loading");
    this.loading();
    this.getSlider();

  }
  getproductHome() {
    this.ProductService.getAll().subscribe(res => {
      const { data } = res
      this.dataProduct = data;
      
    })
  }
  getSlider() {
    this.SlideService.getAll().subscribe(res => {
      const { data } = res;
      data.forEach((element:any) => {
        const {image}= element;
             this.images.push({image});
      });
  
    }, (error) => {

    })


  }
  showloading() {
    this.iconloading.style.display = "block";
  }
  hideloading() {
    this.iconloading.style.display = "none";
  }
  loading() {
    this.showloading();
    setTimeout(() => {
      this.hideloading();
    }, 800)
  }
}
