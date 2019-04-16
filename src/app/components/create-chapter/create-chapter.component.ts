import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


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


  constructor() { }

  ngOnInit() {
    this.chapterForm =new FormGroup({
      'editor': new FormControl(null)
    })
  }

  chapterCreate(){
    console.log(this.chapterForm.value);
    console.log(this.chapterForm.get('editor').value);
  }

}
