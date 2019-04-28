import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getById(id: number) {
    return this.http.get(this.API_URL + "users/" + id);
  }

  signup(username: string, password: string, coverImage: string,) {
    const newUser: User = {
      "username": username,
      "password": password, 
      "coverImage": coverImage,
    }
    return this.http.post<any>(this.API_URL + 'signup', newUser);

  }

  update(user: User) {
    return this.http.put(this.API_URL + "users/" + user.username, user);
  }

  getProfile() {
    return this.http.get<any>(this.API_URL + "profile");
  }

  returnUsername() {
    return this.http.get<any>(this.API_URL + "users");
  }
}
