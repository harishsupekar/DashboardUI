import { ApiService } from '../services/api.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'sign-In',
  templateUrl: './sign-In.component.html',
  styleUrls: ['./sign-In.component.css']
})
export class SignInComponent implements OnInit
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
      this.responsToken;

      if(this.responsToken["jwt"]!="InvalidUser" || this.responsToken["jwt"]!='undefined')
      {
        debugger;
        console.log(this.responsToken);      
        this.router.navigate(['/AdminDashboard']);
      }
   }
}
