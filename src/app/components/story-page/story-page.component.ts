import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {

  public story;

  constructor(private route: ActivatedRoute, private storyService: StoryService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.storyService.getStorybyID(this.route.snapshot.params.story_id)
      .subscribe(data => {
        this.story = data;
        var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(this.story.coverImage)));
        this.story.coverImage = base64String
        console.log(this.story.coverImage);
      });
  }
}
