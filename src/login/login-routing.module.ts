import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
const routes: Routes = 
  [
    { path: 'user-login', component: UserLoginComponent },
    { path: 'user-registration', component: UserRegistrationComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule 
{
  LoginRoutingModule()
  {
    debugger;
  }
}
