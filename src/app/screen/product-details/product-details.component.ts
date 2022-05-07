import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { SizeService } from 'src/app/service/size.service';
import { ToppingService } from 'src/app/service/topping.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private ProductService: ProductService, private Activated: ActivatedRoute,
    private SizeService: SizeService, private ToppingService: ToppingService,
    private Toastr: ToastrService, private CartService: CartService) { }
  selectedColor: any;
  dataProduct: any;
  dataTopping: any;
  dataSize: any;
  dataColor: any;
  valueColorSize: any;
  valueColorTopping: any;
  description: any;
  price: any;
  name: any;
  image: any;
  quantityProduct: number = 0;
  // sizenho: number = 1;
  // sizevua: number = 2;
  // sizelon: number = 3;
  formCart: any = {
    id_product: '',
    name: '',
    price: '',
    image: '',
    id_size: '',
    id_topping: '',
    quantity: '',
    id_user: '',
  }
  ngOnInit(): void {
    this.getProduct();
    this.getSize();
    this.getTopping();
  }
  selectedSize(a: any) {
    this.valueColorSize = a;
  }
  selectedTopping(a: any) {
    this.valueColorTopping = a;
  }
  getProduct() {
    this.Activated.params.subscribe(res => {
      const { id } = res;
      this.ProductService.getName(id).subscribe(value => {
        this.dataProduct = value;
        const { name, price, image } = value;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = value.description.replace(/\"/g, "");
      });
    });
  }
  getSize() {
    this.SizeService.getAll().subscribe(res => {
      const { data } = res;
      this.dataSize = data;
    })
  }
  getTopping() {
    this.ToppingService.getAll().subscribe(res => {
      const { data } = res;
      this.dataTopping = data;
    })
  }
  increasequantity(quantity: any) {
    this.quantityProduct++;
  }
  decreasequantity(quantity: any) {
    if (this.quantityProduct) {
      this.quantityProduct--;

    } else if (this.quantityProduct < 0) {
      this.quantityProduct = 0;
    }
  }
  addTocart() {
    //  xử lý tiền size.
    const priceToppingAndSize = +this.valueColorTopping.price + +this.valueColorSize.price;
    let sumProduct = priceToppingAndSize + +this.dataProduct.price;
    this.formCart.id_product = this.dataProduct.id;
    this.formCart.name = this.name;
    this.formCart.price = sumProduct;
    this.formCart.image = this.dataProduct.image;
    this.formCart.id_size = this.valueColorSize.id;
    this.formCart.size_name = this.valueColorSize.name;
    this.formCart.id_topping = this.valueColorTopping.id;
    this.formCart.topping_name = this.valueColorTopping.name;
    this.formCart.quantity = this.quantityProduct;
    this.formCart.id_user = 1;
    const newProduct = { ...this.formCart };
    this.CartService.addToCart(newProduct, () => {
      this.Toastr.success('Đặt Hàng Thành Công');
    });
  }

}
