import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  createStory(username: string, title: string, summary:Text, coverImage: Blob) {
    return this.http.post<any>(this.API_URL + "createstory", {
      "username": username,
      "title": title,
      "coverImage": coverImage,
      "summary": summary
    });
  }

  getRecent(): Observable<any> {
    return this.http.get<any>(this.API_URL + "recentstories");   
  }

  getPopular(): Observable<any> {
    return this.http.get<any>(this.API_URL + "popularstories");
  }

  getStorybyID(story_id): Observable<any> {
    return this.http.get<any>(this.API_URL + "story/" + story_id);
  }

  update(story): Observable<any> {
    return this.http.put<any>(this.API_URL + "story/" + story.id, story);
  }
  
}


