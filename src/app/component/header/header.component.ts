import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  list: any;
  iconloading:any;
  ngOnInit(): void {
    window.addEventListener("scroll", function () {
      const header = document.querySelector('.navs');
      header?.classList.toggle("sticky", this.window.scrollY > 0);
    });
    this.iconloading = document.getElementById("loading");
    this.loading();
  }
  showloading(){
    this.iconloading.style.display ="block";
  }
  hideloading(){
    this.iconloading.style.display= "none";
  }
  loading(){
    this.showloading();
    setTimeout(()=>{
      this.hideloading();
    },800)
  }
  Menu(e: any) {
    this.list = document.querySelector('ul');
    console.log(this.list)
    e.name === 'menu' ? (e.name = "close", this.list.classList.add('top-[80px]'), this.list.classList.add('opacity-100')) : (e.name = "menu", this.list.classList.remove('top-[80px]'), this.list.classList.remove('opacity-100'))
  }
}
