import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // module for http api 

import { BrowserModule } from '@angular/platform-browser';  //importaed manually to bootstrap login module
import { LoginRoutingModule } from './login-routing.module';    //importaed manually to bootstrap login module (moved 'AppRoutingModule'  from app component)
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component'; //'  ./user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

@NgModule({ 
  declarations: [UserLoginComponent, UserRegistrationComponent],
  imports: [MaterialModule, CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, LoginRoutingModule, HttpClientModule, BrowserAnimationsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [UserLoginComponent]
})
export class LoginModule
{ 

}
