import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';

import { StoryService } from '../../services/story.service';

import { Tag } from '../../models/tag';

/*const TAGS = [
  {id:1, name:'Action'},
  {id:2, name:'Adventure'},
  {id:3, name:'Comdey'},
  {id:4, name:'Crime'}
];
 */

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  
  /*const TAGS: Tag[] = [
    {id:1, name:'Action'},
    {id:2, name:'Adventure'},
    {id:3, name:'Comdey'},
    {id:4, name:'Crime'}
  ];
*/
  //tags = TAGS;
  selectedTags : Tag[]
  storyForm: FormGroup;
  netImage:any = "./assets/profile.jpg";
  
  
  constructor(private storyService: StoryService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.storyForm  =  this.formBuilder.group({
      title: [''],
      tags:[''],
      summary: [''],
      coverImage:['']
    });
  
  }
 
  get formControls(){ return this.storyForm.controls; }

  storyCreate(){
    console.log(this.storyForm.value);
    if(this.storyForm.invalid){
      return;
    }

    this.storyService.createStory(this.formControls.title.value, this.formControls.summary.value, this.formControls.coverImage.value);
  }


  
  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.netImage = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  selectTags(){
    

  }
}

