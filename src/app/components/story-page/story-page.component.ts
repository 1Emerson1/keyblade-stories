import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { ChapterService } from '../../services/chapter.service';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {

  story: any;
  chapters: any;

  constructor(private route: ActivatedRoute, private storyService: StoryService, private chapterService: ChapterService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.storyService.getStorybyID(this.route.snapshot.params.story_id)
      .subscribe(story => {
        this.story = story;

      });

    this.chapterService.getChapters(this.route.snapshot.params.story_id)
      .subscribe(chapters => {
        this.chapters = chapters;
      })
  }
}
