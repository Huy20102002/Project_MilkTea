import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
   return this.http.get<any>(`${environment.api_comment}`);
  }
  getAllByProduct(id:any):Observable<any>{
  return this.http.get<any>(`${environment.api_comment}/selectByCommnets/${id}`);
  }
  add(data:any):Observable<any>{
    return this.http.post<any>(`${environment.api_comment}`,data);
  }
  

}
