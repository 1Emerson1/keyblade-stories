import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users = {}

  constructor(private UserRegistrationService : UserService) { }

  ngOnInit() {
    this.users = this.UserRegistrationService.getUsers();
    
  }

  onFileSelected(event){
    console.log(event);
  }

}
