import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { DatasharingService } from '../../services/datasharing.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedIn: boolean;
  constructor(private authService: AuthService, private dataSharingService: DatasharingService, private router: Router) { 

    this.dataSharingService.loggedIn.subscribe( value => {
      this.loggedIn = value;
    })
  }

  ngOnInit() {
   this.loggedIn = this.authService.loggedIn;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.dataSharingService.loggedIn.next(false);
  }

  closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }
}
