import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from '../login/login-routing.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 

  AppModule()  
  {
    alert("app module constructor called!");
  }
}
