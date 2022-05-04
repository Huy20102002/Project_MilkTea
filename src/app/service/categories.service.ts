import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  getAll(q:string=""): Observable<any>{
    return this.http.get<any>(`${environment.api_category}?q=${q}`);
  
  }
  add(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_category}`,data);
  }
  getId(id:any):Observable<any>{
    return this.http.get<any>(`${environment.api_category}/${id}`);
  }
  updateCate(id:any,post:any):Observable<any>{
    return this.http.put<any>(`${environment.api_category}/${id}`,post);
  }
  deleteCate(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.api_category}/${id}`);
  }
}
