import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.api_slide}`);
  }
  getImage():Observable<any>{
    return this.http.get<any>(`${environment.api_slide}image`);
  }
  get(id:any):Observable<any>{
    return this.http.get<any>(`${environment.api_slide}/${id}`);
  }
  add(post:any):Observable<any>{
    return this.http.post<any>(`${environment.api_slide}`,post);
  }
  edit(id:any,post:any):Observable<any>{
    return this.http.put<any>(`${environment.api_slide}/${id}`,post);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${environment.api_slide}/${id}`);
  }

}
