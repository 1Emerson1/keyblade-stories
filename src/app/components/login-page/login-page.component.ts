import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router, ActivatedRoute } from  '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })

  export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    error = '';
  
    constructor(
      private authService: AuthService, 
      private route: ActivatedRoute,
      private router: Router, 
      private formBuilder: FormBuilder
      ) {}
  
    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.authService.logout();

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.loginForm.controls; }

    login() {
      this.submitted = true;
      if(this.loginForm.invalid) {
        return;
      }
      
      const user: User = {
        username: this.f.username.value,
        password: this.f.password.value
      }
      this.authService.login(user)
        .pipe(first())
        .subscribe(
          data => {
            //this.router.navigate([this.returnUrl]);
            this.router.navigateByUrl('/dashboard');
          },
          error => {
            this.error = error;
          }
        )
      
    }
  }