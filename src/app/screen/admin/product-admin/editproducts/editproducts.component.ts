import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { ConvertVietNamPipe } from 'src/app/untils/pipes/convert-viet-nam.pipe';
@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  file: any;
  displayimage: any;
  urlImage: string = '';
  linkProduct:string='';
  convertname:any;
  oldImage: any;
  private basePath = '/uploads';
  constructor(private fireStorage: AngularFireStorage, private categoryService: CategoriesService, private ProductService: ProductService,
    private route: Router, private activatedRoute: ActivatedRoute, private zone: NgZone,private ConvertVietName:ConvertVietNamPipe) { }
  formProduct: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    idCate: new FormControl(''),
    status: new FormControl(''),
    image: new FormControl(''),
    link_sp: new FormControl('')
  })
  DataCate: any;
  ngOnInit(): void {
    this.getDataCate();
    this.getProduct();
    
  }
  getDataCate() {
    this.categoryService.getAll()
      .subscribe(res => {
        const { data } = res;
        this.linkProduct = data.name;
        this.DataCate = data;
      })
  }

  getProduct() {
    this.activatedRoute.params.subscribe(res => {
      const { id } = res;
      this.ProductService.getId(id)
        .subscribe(res => {
          this.linkProduct = res.name;
          this.displayimage = res.image;
          this.oldImage = res.image;
          this.formProduct.patchValue(res)
        })
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
  updateProduct() {
      if(this.file){
        const filePath = `${this.basePath}/${this.file.name}`;
        const storageRef = this.fireStorage.ref(filePath);
        this.fireStorage.upload(filePath, this.file)
          .snapshotChanges()
          .pipe(
            finalize(() => {
              storageRef.getDownloadURL().subscribe(downloadUrl => {
                this.formProduct.value.image = downloadUrl;
                this.activatedRoute.params.subscribe(res => {
                  const { id } = res;
                  this.formProduct.value.link_sp = this.ConvertVietName.transform(this.formProduct.value.name);
                  this.ProductService.update(id, this.formProduct.value)
                    .subscribe(vl => {
                      this.route.navigate(['/admin/sanpham']);
                    })
                })
              })
            })
          ).subscribe();
      }else{
        this.formProduct.value.image = this.oldImage;
        this.activatedRoute.params.subscribe(res => {
          const { id } = res;
        
          this.formProduct.value.link_sp = this.ConvertVietName.transform(this.formProduct.value.name);

          this.ProductService.update(id, this.formProduct.value)
            .subscribe(vl => {
              this.route.navigate(['/admin/sanpham']);
            })
        })
      }
  }

}
