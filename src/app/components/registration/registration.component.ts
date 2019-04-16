import { Component, OnInit } from '@angular/core';
//import { UserService } from 'src/app/Services/user';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users:User[];

  constructor(/*private UserRegistrationService : UserService*/) { }

  ngOnInit() {
    //this.users = this.UserRegistrationService.getUsers();
    
  }

  onFileSelected(event){
    console.log(event);
  }

}
