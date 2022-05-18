import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthSerivce: AuthService) { }
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  messageNo: any;
  ngOnInit(): void {
  }
  googleLogin() {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //   .then(resp => {
    //     this.auth.loginGoogle(resp.email, resp.id, resp.name, resp.photoUrl)
    //       .subscribe(data => {
    //         Swal.fire(
    //           'Đăng Nhập thành công',
    //           'Vui lòng click vào nút ok',
    //           'success'
    //         )

    //       })
    //   })
  }
  loginAuth() {
    this.AuthSerivce.saveLogin(this.formLogin.value);
  }

}
