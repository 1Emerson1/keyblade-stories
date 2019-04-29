import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

import { DatasharingService } from './datasharing.service';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private API_URL = environment.API_URL;
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient, private router: Router, private dataSharingService: DatasharingService) {}

  login(user: User) {
    return this.http.post<any>(this.API_URL + "login", user)
    .pipe(map(user => {
      if(user && user.token) {
        localStorage.setItem('ACCESS_TOKEN', user.token);
        const time_to_login = Date.now() + 86400000;
        localStorage.setItem('TIMER', JSON.stringify(time_to_login));
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
    this.dataSharingService.loggedIn.next(false);
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('TIMER');
  }

  get loggedIn(): boolean{
    return localStorage.getItem('ACCESS_TOKEN') !==  null;
  }
}

