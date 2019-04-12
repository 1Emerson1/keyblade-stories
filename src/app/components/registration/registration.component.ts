import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users = {}

  constructor() { }

  ngOnInit() {
   // this.users = this.UserRegistrationService.getUsers();
    
  }

  onFileSelected(event){
    console.log(event);
  }

}
