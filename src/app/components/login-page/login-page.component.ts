import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { JwtService } from '../../services/jwt.service';


@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
  })
  export class LoginPageComponent implements OnInit {

    loginForm: FormGroup;
    isSubmitted = false;
  
    constructor(private jwtService: JwtService, private router: Router, private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    get formControls() { return this.loginForm.controls; }

    signin() {
      //this.isSubmitted = true;
      if(this.loginForm.invalid) {
        return;
      }
      
      this.jwtService.signin(this.formControls.username.value, this.formControls.password.value);
      //this.router.navigateByUrl('/story-page');
    }

    getUsers(){
      console.log('Getting all users');
      this.jwtService.getUser();
    }

  }