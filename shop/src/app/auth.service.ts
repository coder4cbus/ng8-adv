import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import decode from 'jwt-decode';

export class LoginRequest {
userId:string
password:string
}

export class LoginResponse {
  token:string 
}

export class UserProfile {
  email:string
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  jwtToken:string

  userProfile:UserProfile

  constructor(private http:HttpClient, private router:Router) { }
 
  canActivate(): boolean {
    if(!this.isLoggedIn()) {
      this.router.navigate(["/login"])

      return false
    } else {
      return true
    }
  }

  login(credentials:LoginRequest) : Observable<LoginResponse> {
    return this.http.post<LoginResponse>("/api/auth/login", credentials)
    // .pipe(tap(response => this.jwtToken = response.token))
    .pipe(tap(response => {
      this.jwtToken = response.token
      this.userProfile = decode<UserProfile>(this.jwtToken)
    }))
}


  logout() {
    this.jwtToken = undefined
  }

  isLoggedIn() : boolean {
    return this.jwtToken !== undefined && 
    this.jwtToken != null
  }

}


