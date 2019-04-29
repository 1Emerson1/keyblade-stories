import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChapterService } from '../../services/chapter.service';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.css']
})
export class ViewStoryComponent implements OnInit {
  chapter: any;
  chapters: any;
  story: any;

  constructor(private chapterService: ChapterService, private storyService: StoryService, private http: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.chapterService.getChapterById(this.route.snapshot.params.story_id, this.route.snapshot.params.chapter_id)
      .subscribe(chapter => {
        this.chapter = chapter;
      });

    this.chapterService.getChapters(this.route.snapshot.params.story_id)
      .subscribe(chapters => {
        this.chapters = chapters;
      });

    this.storyService.getStorybyID(this.route.snapshot.params.story_id)
      .subscribe(story => {
        this.story = story;
      })
  }
}
