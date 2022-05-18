import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.api_topping}`);
  }
  get(id:any):Observable<any>{
    return this.http.get<any>(`${environment.api_topping}/${id}`);
  }
  add(post:any):Observable<any>{
    return this.http.post<any>(`${environment.api_topping}`,post);
  }
  edit(id:any,post:any):Observable<any>{
    return this.http.put<any>(`${environment.api_topping}/${id}`,post);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.api_topping}/${id}`);
  }
}
