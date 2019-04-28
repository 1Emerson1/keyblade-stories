import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  createChapter(chapterTitle: String, chapterText: Text, story_id: number){
    return this.http.post<any>(this.API_URL + "chapter", {
      "chapterTitle" : chapterTitle,
      "chapterText" : chapterText,
      "story_id" : story_id
    })
    .subscribe((res) => {
      console.log(res)
    });
  }

  getChapterById(story_id, chapterID) {
    return this.http.get<any>(this.API_URL + "story/"+story_id+"/chapter/"+chapterID);
  }

  getChapters(story_id) {
    return this.http.get<any>(this.API_URL + "story/"+story_id+"/retrievechapters")
  }

  
}
