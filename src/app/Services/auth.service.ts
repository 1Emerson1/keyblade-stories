import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

import { DatasharingService } from './datasharing.service';

@Injectable({ providedIn: 'root' })

export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router, private dataSharingService: DatasharingService) {}

  login(user: User) {
    return this.http.post<any>("http://0.0.0.0:3000/api/login", user)
    .pipe(map(user => {
      if(user && user.token) {
        localStorage.setItem('ACCESS_TOKEN', user.token);
      }
      this.isLoggedIn = true;
      this.dataSharingService.loggedIn.next(true);

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
    return localStorage.getItem('ACCESS_TOKEN') !==  null;
  }
}

