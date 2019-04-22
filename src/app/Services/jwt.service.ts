import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class JwtService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>("http://localhost:8080/api/auth/signin", 
    { 
      "username": username, 
      "password": password 
    })
      .subscribe((res)=> {
        
      });
  }
  

  signup(username:string, email:string, password:string) {
    console.log("Running signup");

    return this.http.post<any>('http://localhost:8080/api/auth/signup', 
    {
      "username": username, 
      "email": email, 
      "password": password
    })
    .subscribe((res)=> {
      console.log(res)
    });

  }

  logout() {
    localStorage.removeItem('access_token');
  }

  //public get loggedIn(): boolean{
  //  return localStorage.getItem('access_token') !==  null;
  //}

  getUser(){
    return this.http.get<any>('http://localhost:8080/api/test/allUsers').subscribe((res)=>{
      console.log(res);
    });
  }

}

