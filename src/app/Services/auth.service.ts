import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<any>("http://0.0.0.0:3000/api/login", 
    { 
      "username": username, 
      "password": password 
    }).pipe(map(user => {
      if(user && user.token) {
        localStorage.setItem('ACCESS_TOKEN', JSON.stringify(user.token));
      }
      this.isLoggedIn = true;

      if(this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
        this.redirectUrl = null;
      }

      return user;
    }));
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('ACCESS_TOKEN');
  }

  signup(username:string, email:string, password:string, profileImage:string) {
    return this.http.post<any>('http://0.0.0.0:3000/api/signup', 
    {
      "username": username, 
      "email": email, 
      "password": password,
      "profileImage": profileImage
    })
    .subscribe((res)=> {
      this.login(username, password);
    });
  }

  get loggedIn(): boolean{
    console.log(localStorage.getItem('ACCESS_TOOKEN'));
    
    return localStorage.getItem('ACCESS_TOKEN') !==  null;
  }
}

