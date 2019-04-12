import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../../models/user';
import { AuthService } from  '../../services/auth.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })
  export class LoginPageComponent implements OnInit {

    loginForm: FormGroup;
    isSubmitted  =  false;
  
    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
        this.loginForm  =  this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() { return this.loginForm.controls; }

    login() {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if(this.loginForm.invalid){
          return;
        }
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/story-page');
      }

  }