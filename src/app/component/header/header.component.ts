import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private CategoryService:CategoriesService) { }

  list: any;
  iconloading:any;
  dataCate:any;
  button:any;
  navmenu:any;
  navicon:string = 'fas fa-bars';
  menuVarible:boolean=false;
  ngOnInit(): void {
    window.addEventListener("scroll", function () {
      const header = document.querySelector('.navs');
      header?.classList.toggle("sticky", this.window.scrollY > 0);
    });
    this.iconloading = document.getElementById("loading");
    this.loading();
    this.listCate();
  }
  showloading(){
    this.iconloading.style.display ="block";
  }
  hideloading(){
    this.iconloading.style.display= "none";
  }
 
  Menu(e: any) {
    this.menuVarible =!this.menuVarible;
    if(this.menuVarible==true){
      this.navicon = 'fas fa-times'
    }else{
      this.navicon = 'fas fa-bars'
    }
    
  }
  loading(){
    this.showloading();
    setTimeout(()=>{
      this.hideloading();
    },800)
    this.menuVarible = false;
    this.navicon = 'fas fa-bars'

  }
  listCate(){
    this.CategoryService.getAll().subscribe(res=>{
      const {data} = res;
      this.dataCate = data;
    })
  }
}
