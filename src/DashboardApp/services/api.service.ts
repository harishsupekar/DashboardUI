import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({ 
  providedIn: 'root'
})
export class ApiService 
{
  private apiURL = 'https://localhost:1234/api';

  constructor(private http: HttpClient) {}

  //working method to call Login method via get method
  UserLogin(username: string, password: string): Observable<User[]>
  {
    return this.http.get<User[]>(this.apiURL+ '/Login/Login', 
                                          { params: {username: username, password: password} } 
                                         ); //.catch(this.errorHandler);
  };

  errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message || "server error");
  }

  //UserLogin(username: string, password: string):Observable<any>{return this.http.get<any>(this.apiURL+ '/Login/Login?username=Harish&password=Harish@123')};
}
