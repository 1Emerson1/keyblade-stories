import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'keyblade-stories';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const timer = JSON.parse(localStorage.getItem('TIMER'));
    
    if(timer && (Date.now() > timer)) {
      this.authService.logout();
      this.router.navigate(['/login'])
    }
  }
}
