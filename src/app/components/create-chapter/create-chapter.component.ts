import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.css']
})
export class CreateChapterComponent implements OnInit {

  chapterForm: FormGroup

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
    this.chapterForm =new FormGroup({
      'chapterTitle' :new FormControl(null),
      'editor': new FormControl(null)
    })
    
  }

  chapterCreate(){
    console.log(this.chapterForm.value);
    console.log(this.chapterForm.get('editor').value);
  }

}
