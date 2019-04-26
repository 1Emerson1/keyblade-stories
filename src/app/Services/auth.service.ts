import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })

export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    return this.http.post<any>("http://0.0.0.0:3000/api/login", user)
    .pipe(map(user => {
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

  get loggedIn(): boolean{
    console.log(localStorage.getItem('ACCESS_TOOKEN'));
    
    return localStorage.getItem('ACCESS_TOKEN') !==  null;
  }
}

