import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }

  login(username:string, password:string) {
    return this.httpClient.post<{access_token:  string}>('http://localhost:8080/api/auth/signin', {username, password}).pipe(tap(res => {
      localStorage.setItem('access_token', res.access_token);
    }))
  }

  register(username:string, email:string, password:string) {
    console.log('Testing REgistration');
    return this.httpClient.post<{access_token: string}>('http://localhost:8080/api/auth/signup', {username, email, password}).pipe(tap(res => {
      this.login(username, password);
    }))
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

  getUser(){
    return this.httpClient.get<any>('http://localhost:8080/api/test/allUsers').subscribe((res)=>{
      console.log(res);
  });
  }

}

