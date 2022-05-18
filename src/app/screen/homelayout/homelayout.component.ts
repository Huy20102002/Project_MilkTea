import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {

  constructor(private http: HttpClient) { }
  iconloading:any;
 
  ngOnInit(): void {
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

}
