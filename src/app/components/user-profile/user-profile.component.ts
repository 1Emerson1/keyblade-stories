import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;
  error = '';
  netImage: any = "../assets/profile.jpg"

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getProfile();

  }

  // create function
  getProfile() {
    this.userService.getProfile()
      .subscribe(
        profile => {
          this.profile = profile;
          // this.netImage = profile.coverImage;
        },
        error => {
          console.log(error)
          this.error = error;
        }
      )
  }

}
