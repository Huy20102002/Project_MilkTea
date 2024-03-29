import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.api_size}`);
  }
  get(id:any):Observable<any>{
    return this.http.get<any>(`${environment.api_size}/${id}`);
  }
  add(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_size}`,data);
  }
  edit(id:any,data:any):Observable<any>{
    return this.http.put<any>(`${environment.api_size}/${id}`,data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.api_size}/${id}`);
  }
}
