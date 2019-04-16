import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from  '../../models/user';
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
   // this.users = this.UserRegistrationService.getUsers();

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.pattern]
    });
  }

  get formControls() { return this.registerForm.controls; }

  register() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;

    if (this.registerForm.invalid){
      return;
    }
    
    // log user in
    this.authService.login(this.registerForm.value);
    this.router.navigateByUrl('/story-page');
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.netImage = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
