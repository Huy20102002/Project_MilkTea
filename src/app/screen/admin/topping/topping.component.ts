import { Component, OnInit } from '@angular/core';
import { ToppingService } from 'src/app/service/topping.service';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.css']
})
export class ToppingComponent implements OnInit {

  constructor(private ToppingService: ToppingService) { }
  dataTopping: any;
  ngOnInit(): void {
    this.getAllTopping();
  }
  getAllTopping() {
    this.ToppingService.getAll().subscribe(res => {
      const {data} = res;
      this.dataTopping = data;
    })
  }
  deleteTopping(id:any){
    this.dataTopping = this.dataTopping.filter((item:any)=>item.id != id);
    this.ToppingService.delete(id).subscribe(res=>{})
  }

}
