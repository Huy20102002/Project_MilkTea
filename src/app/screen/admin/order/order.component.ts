import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private OrderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }
  p:number=0;
  dataOrder: any;
  getAllOrder() {
    this.OrderService.getOrder().subscribe(res => {
      const { data } = res;
      this.dataOrder = data;
    })
  }

}
