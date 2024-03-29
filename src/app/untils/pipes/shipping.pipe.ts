import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipping'
})
export class ShippingPipe implements PipeTransform {

  transform(value: any): any {
    if (value == 1) {
      return "Đơn hàng Mới";
    } else if (value == 2) {
      return "Đã Xác Nhận";
    }else if(value==3){
      return "Đang giao hàng";
    }else if(value==4){
      return "Đã giao hàng";
    }else if(value ==5){
      return "Đã hủy";
    }else{
      return "Không xác định"
    }
  }

}
