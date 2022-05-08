import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService, private LocalStorageService: LocalStorageService,
    private ProductService: ProductService, private ToastrService: ToastrService,private Router:Router) { }
  quantityProduct: number = 0;
  dataCart: any;
  dataImage: any;
  sumpriceCart: number = 0;
  ngOnInit(): void {
    this.getCart();
    this.sumPriceCart();
  }
  sumPriceCart() {
    // const dataCart = this.localStorageService.getLocalStorage("cart");
    let sum = 0;
    this.dataCart.forEach((element: any) => {
      sum += element.sumprice;
    });
    return sum;
  }
  increasequantity(data: any) {
    this.CartService.increaseQuantityCart(data, () => {
      this.ToastrService.success("Tăng số lượng thành công");
      const cart = this.LocalStorageService.getLocalStorage("cart");
      this.dataCart = cart;
      this.sumpriceCart = this.sumPriceCart();

    })
  }
  decreasequantity(data: any) {
    this.CartService.decreseQuantityCart(data, () => {
      this.ToastrService.success("giảm số lượng thành công");
      const cart = this.LocalStorageService.getLocalStorage("cart");
      this.dataCart = cart;
      this.sumpriceCart = this.sumPriceCart();
    })

  }
  getCart() {
    const cart = this.LocalStorageService.getLocalStorage("cart");
    this.dataCart = cart;
    this.sumpriceCart = this.sumPriceCart();
  }
  removeCart(item: any) {
    Swal.fire({
      title: `Bạn có muốn xóa sản phẩm này ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Xóa thành công!',
          'sản phẩm của bạn đã xóa thành công ',
          'success'
        )
        this.dataCart = this.CartService.removeCart(item);
        this.sumpriceCart = this.sumPriceCart();
      }
    })

  }
  buttonOrder(){
    this.Router.navigate(['/giohang/thanhtoan'])
  }

}
