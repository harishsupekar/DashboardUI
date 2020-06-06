import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-In/sign-In.component';
import { SignUpComponent } from './sign-Up/sign-Up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = 
  [
    { path: '' , redirectTo: '/SignIn', pathMatch: 'full'},
    { path: 'SignIn', component: SignInComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'AdminDashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.routing.module').then(m => m.AdminDashboardModule) },
    { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [SignInComponent, SignUpComponent, PageNotFoundComponent]
