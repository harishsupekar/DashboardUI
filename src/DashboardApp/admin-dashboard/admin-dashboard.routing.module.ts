import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { MaterialModule } from '../material-module';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  {path: 'topNavbar', component: TopNavbarComponent}
];

@NgModule({
  declarations: [AdminDashboardComponent, TopNavbarComponent],
  imports: [
    CommonModule, MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminDashboardModule { }
