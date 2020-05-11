import { ApiService } from '../api.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit
{
  //@Input() error: string | null;
  //@Output() submitEM = new EventEmitter();

  userName = 'Harish';
  password = 'Harish@123';
  responsToken: any;

  constructor(private apiServices: ApiService){ }
  
  ngOnInit(){ }

   checkLogin(username: string, password:string)
   {   debugger;
      this.responsToken =  this.apiServices.UserLogin(username,password).subscribe((data)=> this.responsToken = data);
   }
}
