import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pipe, throwError } from 'rxjs';
import { Observable } from 'rxjs'; 

@Injectable({ 
  providedIn: 'root'
})
export class ApiService 
{
  private apiURL = 'https://localhost:1234/api';

  constructor(private http: HttpClient) {}

  //working method to call Login method via get method
  UserLogin(username: string, password: string) :Observable<any>
  {
    return this.http.get<any>(this.apiURL+ '/Login/Login', {params: {username: username, password: password}} );
  };

  //UserLogin(username: string, password: string):Observable<any>{return this.http.get<any>(this.apiURL+ '/Login/Login?username=Harish&password=Harish@123')};
}
