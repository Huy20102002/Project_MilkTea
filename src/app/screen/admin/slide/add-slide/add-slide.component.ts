import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SlideService } from 'src/app/service/slide.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-slide',
  templateUrl: './add-slide.component.html',
  styleUrls: ['./add-slide.component.css']
})
export class AddSlideComponent implements OnInit {
  formSlide: FormGroup = new FormGroup({
    name: new FormControl(''),
    image: new FormControl('')
  })
  file: any;
  displayImage: any;
  private basePath = '/uploads';
  constructor(private SlideService: SlideService,
    private route: Router, private FireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  changeImage(event: any) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.displayImage = reader.result;
    }
  }
  addSlide() {
   
    if(this.file==undefined){
      Swal.fire({
        icon: "error",
        title:"Có lỗi",
        text: `Vui lòng nhập ảnh`
      })
    }else{
      const filePath = `${this.basePath}/${this.file.name}`;
      const storageRef = this.FireStorage.ref(filePath);
      this.FireStorage.upload(filePath, this.file)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              this.formSlide.value.image = downloadUrl;
              this.SlideService.add(this.formSlide.value).subscribe(res => {
                this.route.navigate(['admin/slide']);
        
              }, (error) => {
                console.log(error);
  
                Swal.fire({
                  icon: 'error',
                  title: 'Có lỗi',
                  text: `${error.error.message}`,
                })
              })
            })
          })
        ).subscribe();
    }
 

  }

}
