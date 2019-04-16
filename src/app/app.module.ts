import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { CreateChapterComponent } from './components/create-chapter/create-chapter.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginBarComponent,
    StoryPageComponent,
    UserProfileComponent,
    RegistrationComponent,
    routingComponent,
    MainComponent,
    AboutComponent,
    SearchResultComponent,
    LoginPageComponent,
    CreateStoryComponent,
    CreateChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
