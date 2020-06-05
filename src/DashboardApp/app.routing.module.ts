import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = 
  [
    { path: '' , redirectTo: '/user-login', pathMatch: 'full'}, //{ path: '', component: UserLoginComponent},
    { path: 'user-login', component: UserLoginComponent },
    { path: 'user-registration', component: UserRegistrationComponent },
    { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardAppRoutingModule { }

export const routingComponent = [UserRegistrationComponent, UserLoginComponent, PageNotFoundComponent]
