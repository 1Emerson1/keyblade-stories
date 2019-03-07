import { enableProdMode, Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//navbar Methods which are declared in the mainApp.js file located in the src/assets file 
//needed to be declared here o be accessed within the component created in this file
declare function openNav(): any;
declare function closeNav(): any;

//Creation of a component to export the functions of the mainApp.js file so that they can be used on the webpage.
@Component({
})
export class MyComponent implements OnInit{
  ngOnInit(){
    openNav();
    closeNav();
  }
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
