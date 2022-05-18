import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { SizeService } from 'src/app/service/size.service';
import { ToppingService } from 'src/app/service/topping.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { CommentService } from 'src/app/service/comment.service';
import Swal from 'sweetalert2';
import { LocalStorageService } from 'src/app/service/local-storage.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private ProductService: ProductService, private Activated: ActivatedRoute,
    private SizeService: SizeService, private ToppingService: ToppingService,
    private Toastr: ToastrService, private CartService: CartService,
    private CommentService: CommentService, private localStorageService: LocalStorageService) { }
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
  quantityProduct: number = 1;
  priceSize: number = 0;
  id_size: number = 0;
  name_size: string = '';
  priceTopping: number = 0;
  nametopping: string = '';
  id_toppings: string = '';
  DataComment: any;

  formCart: any = {
    id_product: '',
    name: '',
    price: '',
    image: '',
    id_size: '',
    size_name: '',
    id_topping: '',
    topping_name: '',
    quantity: '',
    id_user: '',
    sumprice: ''
  }
  formComment: any = {
    idUser: "",
    idProducts: "",
    content: ""
  }
  ngOnInit(): void {
    this.getProduct();
    this.getSize();
    this.getTopping();
  }
  selectedSize(a: any) {
    this.valueColorSize = a;
    this.priceSize = this.valueColorSize.price;
    this.name_size = this.valueColorSize.name;
    this.id_size = this.valueColorSize.id;
  }
  selectedTopping(a: any) {
    this.valueColorTopping = a;
    this.priceTopping = this.valueColorTopping.price;
    this.id_toppings = this.valueColorTopping.id;
    this.nametopping = this.valueColorTopping.name;
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
  addTocart() {
    //  xử lý tiền size.
    // let id_toppings = this.valueColorTopping.id ? 0 : this.valueColorTopping.id;
    // price topping
    let sumProduct = (+this.priceTopping + +this.priceSize) + +this.dataProduct.price;
    this.formCart.id_product = this.dataProduct.id;
    this.formCart.name = this.name;
    this.formCart.price = sumProduct;
    this.formCart.image = this.dataProduct.image;
    this.formCart.id_size = this.id_size == 0 ? this.dataSize[0].id : this.valueColorSize.id;
    this.formCart.size_name = this.name_size == '' ? this.dataSize[0].name : this.valueColorSize.name;;
    this.formCart.id_topping = this.id_toppings;
    this.formCart.topping_name = this.nametopping;
    this.formCart.quantity = this.quantityProduct;
    this.formCart.sumprice = this.quantityProduct * sumProduct;
    this.formCart.id_user = 1;
    const newProduct = { ...this.formCart };
    this.CartService.addToCart(newProduct, () => {
      this.Toastr.success('Đặt Hàng Thành Công');
    });
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
        this.CommentService.getAllByProduct(this.dataProduct.id).subscribe(value => {
          const { data } = value;
          this.DataComment = data;
        });
      });
    });
    
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



  AddComment() {
    this.formComment.idProducts = this.dataProduct.id;
    this.formComment.idUser = 1;
    this.CommentService.add(this.formComment).subscribe(res => {
      this.Toastr.success("Bình luận thành công");
      // console.log(res);
      const { data } = res;
      this.DataComment.push(data);
      // khi bình luận xong cho nội dung bằng rỗng.
      this.formComment.content = '';
    }, (error) => {
      this.Toastr.error("Bình luận thất bại");
    });
  }


}
