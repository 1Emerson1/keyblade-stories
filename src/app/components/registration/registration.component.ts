import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  netImage:any = "./assets/profile.jpg"

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      profileImage: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
    });
  }

  get f() { return this.registerForm.controls; }

  signup() {
    console.log("Registering user!");

    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }

    const newUser: User = {
      username: this.f.username.value,
      password: this.f.password.value, 
      coverImage: this.netImage,
    }
    console.log("22222");

    this.userService.signup(newUser).pipe(first())
     .subscribe(
       data => {
        console.log(data)
       },
       error => {
         console.log(error)
         this.error = error;
         this.loading = false;
       }
     )

    //this.router.navigateByUrl('/login');
  }

  url:string;
  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event) => {
        this.netImage = (<FileReader>event.target).result;

      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
