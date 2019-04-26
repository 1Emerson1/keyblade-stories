import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
   
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chapterForm  =  this.formBuilder.group({
      chapterTitle: ['', Validators.required],
      editor: ['', Validators.required],
    });
  }

  get f() { return this.chapterForm.controls; }

  chapterCreate() {
    // console.log(this.chapterForm.value);
    console.log(this.chapterForm.get('editor').value);
  }

}
