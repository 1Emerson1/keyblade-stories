import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryPageComponent } from './story-page/story-page.component';


//import{RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    StoryPageComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
