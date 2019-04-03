import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { AboutComponent } from './about/about.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginWindowComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'story-page', component: StoryPageComponent},
  { path: 'results', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent 
        = [HomeComponent, RegistrationComponent, 
           LoginWindowComponent, UserProfileComponent,
           AboutComponent, StoryPageComponent, SearchResultComponent];