import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getOrderClient(id:any):Observable<any>{
    return this.http.get<any>(`${environment.api_order}/showcart/${id}`);
  }
  addOrder(post:any):Observable<any>{
    return this.http.post<any>(`${environment.api_order}`,post);
  }
  addCart(post:any):Observable<any>{
    return this.http.post<any>(`${environment.api_carts}`,post);
  }
}
