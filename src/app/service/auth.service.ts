import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isloggedIns = new BehaviorSubject<boolean>(false);
  isloggedIns = this._isloggedIns.asObservable();
  constructor(private http: HttpClient, private localStorage: LocalStorageService,private Router: Router) {
    const token = localStorage.getLocalStorage('auth');
    this._isloggedIns.next(!!token);
  }
  // loginByGoogle(email: string, googleId: string, name: string, photoUrl: string): Observable<any> {
  //   // return this.http.get<any>
  // }
  register(data: any): Observable<any> {
    return this.http.post<any>(`${environment.api_user}/register`, data);
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.api_user}/login`, data);
  }
  saveLogin(data: any) {
    this.login(data).subscribe(res => {
      this.localStorage.setLocalStorage('auth', res.token);
      this._isloggedIns.next(true);
      Swal.fire('Đăng Nhập thành công',
        'Vui lòng click vào nút ok',
        'success').then(() => {
             this.Router.navigate([''])
        })
        return res;
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: `${error.error.message}`,
        text: 'Vui lòng thử lại !',
      })
    });
  }

}
