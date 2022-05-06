import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ConvertVietNamPipe } from 'src/app/untils/pipes/convert-viet-nam.pipe';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  DataCate: any;
  file: any;
  displayimage: any;
  urlImage: string = '';
  linkProduct:string='';
  private basePath = '/uploads';
  constructor(private fireStorage: AngularFireStorage, private categoryService: CategoriesService, private ProductService: ProductService, private route: Router,private ConvertVietName:ConvertVietNamPipe) { }
  formProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    idCate: new FormControl(''),
    status: new FormControl(''),
    image: new FormControl(''),
    link_sp: new FormControl('')
  })

  ngOnInit(): void {
    this.getDataCate();
  }
  getDataCate() {
    this.categoryService.getAll()
      .subscribe(res => {
        const { data } = res;
        this.DataCate = data;
      })
  }
  changeImage(event: any) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.displayimage = reader.result;
    }
  }
  addProduct() {
    const filePath = `${this.basePath}/${this.file.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    this.fireStorage.upload(filePath, this.file)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadUrl => {
            this.urlImage = downloadUrl;
            this.formProduct.value.image = this.urlImage;
            // console.log(this.formProduct.value.image);
            this.formProduct.value.link_sp = this.ConvertVietName.transform(this.formProduct.value.name);
            this.ProductService.addProduct(this.formProduct.value)
              .subscribe(res => {
                this.route.navigate(['/admin/sanpham']);
              })
          })
        })
      ).subscribe();

  }

}
