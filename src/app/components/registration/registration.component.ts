import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  netImage:any = "./assets/profile.jpg"

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      profileImage: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['']
    });
  }

  get formControls() { return this.registerForm.controls; }

  signup() {
    this.isSubmitted = true;
    if (this.registerForm.invalid){
      return;
    }

    this.authService.signup(this.formControls.username.value, this.formControls.email.value, this.formControls.password.value, this.netImage);

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
