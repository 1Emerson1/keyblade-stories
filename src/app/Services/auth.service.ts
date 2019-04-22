import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from  '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //public login(){
    //localStorage.setItem('ACCESS_TOKEN', "access_token");
  //}

  // public login(form: FormGroup) {
  //   let resource = JSON.stringify(form);

  //   return this.httpClient.post<any>('http://localhost:8080/api/auth/signin', resource)
  //   .pipe(
      
  //   );
    
  //   //return this.httpClient.post<{access_token: string}>('http://localhost:8080/api/auth/signin', {resource}).pipe(tap(res => {
  //   //  localStorage.setItem('access_token', res.access_token);
  //   //}))
  // }

  // public isLoggedIn(){
  //   return localStorage.getItem('ACCESS_TOKEN') !== null;

  // }

  // public logout(){
  //   localStorage.removeItem('ACCESS_TOKEN');
  // }
}