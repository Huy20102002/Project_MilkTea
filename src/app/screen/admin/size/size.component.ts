import { Component, OnInit } from '@angular/core';
import { SizeService } from 'src/app/service/size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  constructor(private SizeService: SizeService) { }
  sizeData: any;
  ngOnInit(): void {
    this.getAllSize();
  }
  getAllSize() {
    this.SizeService.getAll().subscribe(res => { 
      const { data } = res; 
      this.sizeData = data
     })
  }
  deleteSize(id:any){
    this.sizeData = this.sizeData.filter((item:any)=>item.id != id);
    this.SizeService.delete(id).subscribe(res=>{})
  }
}
