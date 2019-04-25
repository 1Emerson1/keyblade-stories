import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get<any>("http://0.0.0.0:3000/api/profile")
      .pipe(map(user => {
        return user;
      }))
  }
}
