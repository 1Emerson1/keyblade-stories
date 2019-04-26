import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.css']
})
export class ChapterPageComponent implements OnInit {

  public chapter;

  constructor(private route: ActivatedRoute, private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapterById(this.route.snapshot.params.story_id, this.route.snapshot.params.chapterID)
      .subscribe(data => {
        this.chapter = data;
      });
  }

}
