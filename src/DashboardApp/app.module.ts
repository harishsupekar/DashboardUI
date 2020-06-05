import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';  
import { DashboardAppRoutingModule, routingComponent } from './app.routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

@NgModule({ 
  declarations: [AppComponent,routingComponent],
  imports: [MaterialModule, CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, DashboardAppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class DashboardAppModule
{ 

}
