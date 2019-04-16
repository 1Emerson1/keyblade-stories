import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Tag } from 'src/app/Models/tag';
import { TAGS } from 'src/app/Models/mock-tag';

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
  tags = TAGS;
  storyForm: FormGroup;
  isSubmitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.storyForm  =  this.formBuilder.group({
      title: [''],
      tags:[''],
      summary: [''],
      //coverImage:['']
  });
  
  }
 
  get formControls(){ return this.formControls; }

  storyCreate(){
    console.log(this.storyForm.value);
    this.isSubmitted = true;
    if(this.storyForm.invalid){
      return;
    }

  }
  
}
