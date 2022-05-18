import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderservice: OrderService, private Activated: ActivatedRoute) { }
  dataOrderDt: any;
  dataInfo: any;
  daxacnhan: number = 2;
  danggiaohang: number = 3;
  dagiaohang: number = 4;
  dahuy: number = 5;
  status:number=0;
  created_at:any;
  updated_at:any;
  ngOnInit(): void {
    this.getOrderdetails();
    this.getOrder();
  }
  getOrderdetails() {
    this.Activated.params.subscribe(res => {
      const { id } = res;
      this.orderservice.getCartAdmin(id).subscribe(vl => {
        const { data } = vl;
        this.dataOrderDt = data;
      });
    });
  }
  getOrder() {
    this.Activated.params.subscribe(res => {
      const { id } = res;
      this.orderservice.getOrderId(id).subscribe(vl => {
        this.dataInfo = vl;
        this.status = vl.status
        this.created_at = vl.created_at;
        this.updated_at = vl.updated_at;
      });
    });
  }
  changeStatus(status: any) {
    console.log(status);
    let statusText;
    if (status == 2) {
      statusText = 'Đã xác nhận';
    } else if (status == 3) {
      statusText = 'Đang giao hàng';
    } else if (status == 4) {
      statusText = 'Đã giao hàng';
    } else if (status == 5) {
      statusText = 'Đã hủy';
    }
    Swal.fire({
      title: `Cập nhật trạng thái thành: ${statusText}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Activated.params.subscribe(res => {
          const { id } = res;
          this.orderservice.updateStatusOrder(id, {status}).subscribe(vl => {
                this.status = status;
          })
        })
        Swal.fire(
          'Cập nhật thành công',
          'Đơn hàng đã cập nhật trạng thái thành công',
          'success'
        )
      }
    })
  }

}
