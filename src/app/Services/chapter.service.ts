import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) { }

  createChapter(chapterTitle: String, chapterText: Text, story_id: number){
    return this.http.post<any>("http://localhost:3000/api/chapter", {
      "chapterTitle" : chapterTitle,
      "chapterText" : chapterText,
      "story_id" : story_id
    })
    .subscribe((res) => {
      console.log(res)
    });
  }

  getChapterById(story_id, chapterID): Observable<any>{
    return this.http.get<any>("http://localhost:3000/api/story/"+story_id+"/chapter/"+chapterID);
  }

  
}
