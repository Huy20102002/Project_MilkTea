import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private OrderService: OrderService) { }
  keyword: string ="";
  keywordStatus:string='';
  p:number=0;
  dataOrder: any;
  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder(search:string='') {
    this.OrderService.getOrder(search).subscribe(res => {
      const { data } = res;
      this.dataOrder = data;
    })
  }
  search(){
    let key = this.keyword == "" ? this.keywordStatus : this.keyword;
      this.getAllOrder(key);
  }

}
