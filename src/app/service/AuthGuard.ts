import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
      const loggedInuser = JSON.parse(localStorage.getItem("auth") || "{}");
      if(loggedInuser ==undefined||loggedInuser==""){
          this.router.navigate(['account-login'])
          return false;
      }
          return true;
    }
}