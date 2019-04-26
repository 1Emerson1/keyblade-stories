import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get("http://0.0.0.0:300/api/users/" + id);
  }

  signup(user: User) {
    return this.http.post<any>('http://0.0.0.0:3000/api/signup', user)
      .pipe(map(data => {
        return data;
      }))
  }

  update(user: User) {
    return this.http.put("http://0.0.0.0:3000/users/" + user.username, user);
  }

  getProfile() {
    return this.http.get<any>("http://0.0.0.0:3000/api/profile");
  }
}
