import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutComponent } from './components/about/about.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'user', component: UserProfileComponent},
  { path: 'story-page', component: StoryPageComponent},
  { path: 'results', component: SearchResultComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent 
        = [HomeComponent, RegistrationComponent, 
           LoginPageComponent, UserProfileComponent,
           AboutComponent, StoryPageComponent, SearchResultComponent];