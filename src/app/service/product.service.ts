import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.api_product}`);
  }
  addProduct(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_product}`,data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.api_product}/${id}`);
  }
}
