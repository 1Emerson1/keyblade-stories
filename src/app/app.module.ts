import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginBarComponent } from './login-bar/login-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginBarComponent,
    SidebarComponent,
    SidebarUserComponent,
    StoryPageComponent,
    UserProfileComponent,
    RegistrationComponent,
    LoginWindowComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
