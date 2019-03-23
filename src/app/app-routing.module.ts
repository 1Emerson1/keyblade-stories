import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginBarComponent } from './login-bar/login-bar.component';

const routes: Routes = [
  {path:'loginbar', component:LoginBarComponent},
  {path:'home', component:HomeComponent},
  {path:'register', component:RegistrationComponent},
  {path:'user', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginBarComponent, HomeComponent, RegistrationComponent, UserProfileComponent]