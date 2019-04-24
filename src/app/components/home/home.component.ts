import { Component, OnInit } from '@angular/core';

import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private recentStories: any = [];
  private popularStories: any = [];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getRecent().subscribe(data => {
      this.recentStories = data;
    });

    this.storyService.getPopular().subscribe(data => {
      this.popularStories = data;
    })
    
  }

}
