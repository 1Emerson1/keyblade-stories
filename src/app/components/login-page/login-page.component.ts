import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router, ActivatedRoute } from  '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })

  export class LoginPageComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    loading = false;
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
      this.loading = true;
      
      this.authService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error;
            this.loading = false;
          }
        )
      //this.router.navigateByUrl('/story-page');
    }
  }