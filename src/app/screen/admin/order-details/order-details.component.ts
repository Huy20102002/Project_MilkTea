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
  daxacnhan: number = 1;
  danggiaohang: number = 2;
  dagiaohang: number = 3;
  dahuy: number = 4;

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
      });
    });
  }
  changeStatus(status: any) {
    let statusText;
    if (status == 1) {
      statusText = 'Đã xác nhận';
    } else if (status == 2) {
      statusText = 'Đang giao hàng';
    } else if (status == 3) {
      statusText = 'Đã giao hàng';
    } else if (status == 4) {
      statusText = 'Đã hủy';
    }
    Swal.fire({
      title: `Cập nhật trạng thái thành: ${statusText}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Activated.params.subscribe(res => {
          const { id } = res;
          this.orderservice.updateStatusOrder(id, {status}).subscribe(vl => {
                this.dataInfo.status = status;
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
