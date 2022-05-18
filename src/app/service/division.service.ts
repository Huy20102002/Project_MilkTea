import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(`${environment.api_divison}/p`);
  }
  getTown(idDivison:string = ''):Observable<any>{
    return this.http.get<any>(`${environment.api_divison}/p/${idDivison}?depth=2`);
  }
  getWards(districts:string =''):Observable<any>{
    return this.http.get<any>(`${environment.api_divison}/d/${districts}?depth=2`);
  }
}
