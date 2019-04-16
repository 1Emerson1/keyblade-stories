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

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'story-page', component: StoryPageComponent},
  { path: 'results', component: SearchResultComponent},
  { path: 'create-story', component: CreateStoryComponent},
  { path: 'create-chapter', component: CreateChapterComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent 
        = [HomeComponent, RegistrationComponent, 
           LoginPageComponent, UserProfileComponent,
           AboutComponent, StoryPageComponent, SearchResultComponent,
           CreateStoryComponent, CreateChapterComponent];