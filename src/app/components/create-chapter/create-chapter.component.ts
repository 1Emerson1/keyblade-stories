import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.css']
})
export class CreateChapterComponent implements OnInit {
  submitted = false;
  chapterForm: FormGroup;

  editorStyle ={
    height:'400px'
  }
   config = {
     toolbar:[
      ['bold','italic','underline','strike','link'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      [ 'blockquote', 'code-block'],
      ['video', 'image'],
      [{ 'indent': '-1'}, {'indent':'+1'}]
     ]
   }
   
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.chapterForm  =  this.formBuilder.group({
      chapterTitle: ['', Validators.required],
      editor: [''],
    });
  }

  get f() { return this.chapterForm.controls; }

  chapterCreate() {
    this.submitted = true;
    // console.log(this.chapterForm.value);
    console.log(this.chapterForm.get('editor').value);

    var story_id, chapter_id;

    this.router.navigate(['/story/' + story_id + '/chapter/' + chapter_id])
  }

}
