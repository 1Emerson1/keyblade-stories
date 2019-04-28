import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutComponent } from './components/about/about.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CreateStoryComponent } from './components/create-story/create-story.component';
import { CreateChapterComponent } from './components/create-chapter/create-chapter.component';
import { ChapterPageComponent } from './components/chapter-page/chapter-page.component'
import { ViewStoryComponent } from './components/view-story/view-story.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'dashboard', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'story/:story_id', component: StoryPageComponent},
  { path: 'results', component: SearchResultComponent},
  { path: 'create-story', component: CreateStoryComponent, canActivate: [AuthGuard]},
  { path: 'create-chapter', component: CreateChapterComponent, canActivate: [AuthGuard]},
  { path: 'story/:story_id/chapter/:chapter_id', component: ChapterPageComponent },
  { path: 'view-story', component: ViewStoryComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponent = [
  HomeComponent, 
  RegistrationComponent, 
  LoginPageComponent, 
  UserProfileComponent,
  AboutComponent, 
  StoryPageComponent, 
  SearchResultComponent,          
  CreateStoryComponent, 
  CreateChapterComponent,
  ChapterPageComponent,
  ViewStoryComponent,
];