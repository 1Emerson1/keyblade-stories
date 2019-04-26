import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { QuillModule } from 'ngx-quill';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { CreateChapterComponent } from './components/create-chapter/create-chapter.component';

// SERVICES
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

// HELPERS
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

import { JwtModule } from '@auth0/angular-jwt';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component';

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
    CreateChapterComponent,
    ChapterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('ACCESS_TOKEN');},
          whitelistedDomains: ['http://localhost:3000'],
          blacklistedRoutes: ['http://localhost:3000/api/login']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
