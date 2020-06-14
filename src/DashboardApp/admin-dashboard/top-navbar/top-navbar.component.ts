import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  @Input('parentMyData') public passedData;
  

  constructor(private router: Router) { }

  ngOnInit() { }

 Logout(): void
 {
   this.router.navigate(['/SignIn']);
 }

}
