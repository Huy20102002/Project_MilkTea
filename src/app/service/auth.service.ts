import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // loginByGoogle(email: string, googleId: string, name: string, photoUrl: string): Observable<any> {
  //   // return this.http.get<any>
  // }
  register(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_user}/register`,data);
  }
  login(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_user}/login`,data);
  }
}
