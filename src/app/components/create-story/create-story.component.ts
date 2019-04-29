import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';

import { StoryService } from '../../services/story.service';
import { UserService } from '../../services/user.service';

//import { Tag } from '../../models/tag';

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
  // selectedTags : Tag[]

  storyForm: FormGroup;
  error = "";
  submitted = false;
  username = "";
  netImage = "";
  
  constructor(private userService: UserService, private storyService: StoryService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.storyForm  =  this.formBuilder.group({
      title: ['', Validators.required],
      tags:[''],
      summary: ['', Validators.required],
      coverImage:['']
    });
  }
 
  get f() { return this.storyForm.controls; }

  storyCreate() {
    this.submitted = true;
    if(this.storyForm.invalid){
      return;
    }

    this.userService.returnUsername()
      .subscribe(username => {
        this.username = username;
    })

    //var img = new Buffer(fs.readFileSync(this.netImage)).toString('base64');
    //console.log(img)

    this.storyService.createStory(this.username, this.f.title.value, this.f.summary.value, this.f.coverImage.value)
      .subscribe(error => {
        this.error = error;
    });

    this.router.navigate(['/create-chapter'])
  }
  
  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        var netImage = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  selectTags() {}
}

