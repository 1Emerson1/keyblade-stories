import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  createStory(title: string, summary:Text, coverImage: Blob) {
    return this.http.post<any>("http://0.0.0.0:3000/api/createstory", {
      "title": title,
      "coverImage": coverImage,
      "summary": summary
    })
      .subscribe((res)=> {
        console.log(res)
      });
  }

  getRecent(): Observable<any> {
    return this.http.get<any>("http://0.0.0.0:3000/api/recentstories");   
  }

  getPopular(): Observable<any> {
    return this.http.get<any>("http://0.0.0.0:3000/api/popularstories");
  }

  getStorybyID(story_id): Observable<any> {
    return this.http.get<any>("http://0.0.0.0:3000/api/story/" + story_id);
  }

  update(story): Observable<any> {
    return this.http.put<any>("http://0.0.0.0:3000/api/story/" + story.id, story);
  }
  
}


