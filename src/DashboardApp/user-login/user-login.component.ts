import { ApiService } from '../services/api.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit
{
  //@Input() error: string | null;
  //@Output() submitEM = new EventEmitter();

  userName = 'Harish';
  password = 'Harish@123';
  responsToken = [];

  constructor(private apiServices: ApiService, private router: Router){ }
  
  ngOnInit(){ }

   checkLogin(username: string, password:string)
   {   
      this.apiServices.UserLogin(username,password).subscribe((data)=> this.responsToken = data);
      if(this.responsToken["successKey"]!="InvalidUser")
      {
        debugger;
        console.log(this.responsToken);      
        this.router.navigate(['/user-registration']);
      }
   }
}
