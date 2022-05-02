import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  list:any;

  ngOnInit(): void {
    window.addEventListener("scroll",function(){
      var header = this.document.querySelector('.navs');
      header?.classList.toggle("sticky",this.window.scrollY>0);
    })
  }
  Menu(e:any){
   this.list = document.querySelector('ul');
   console.log(this.list)
    e.name === 'menu' ? (e.name = "close",this.list.classList.add('top-[80px]') , this.list.classList.add('opacity-100')) :( e.name = "menu" ,this.list.classList.remove('top-[80px]'),this.list.classList.remove('opacity-100'))
  }
}
