import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'topNavbar', component: TopNavbarComponent },
  { path: 'sideNavbar', component: SideNavbarComponent }
];

@NgModule({
  declarations: [AdminDashboardComponent, TopNavbarComponent, SideNavbarComponent],
  imports: [
    CommonModule, MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminDashboardModule 
{
  AdminDashboardModule()
  {
    alert("AdminDashboardModule triggered!!");
  }
}
