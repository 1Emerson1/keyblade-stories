import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  netImage:any = "./assets/profile.jpg"

  constructor(private jwtService: JwtService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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

    this.jwtService.signup(this.formControls.username.value, this.formControls.email.value, this.formControls.password.value);
    this.router.navigateByUrl('/login');
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
