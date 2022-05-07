import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // constructor() { }
  setLocalStorage(key: any, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  };
  getLocalStorage(key: any){
   return JSON.parse(localStorage.getItem(key) || "{}");
  };
}
