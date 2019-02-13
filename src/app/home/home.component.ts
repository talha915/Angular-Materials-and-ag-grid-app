import { Component, OnInit } from '@angular/core';

/* Router */
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  homeRoute() {
    this.router.navigateByUrl('Home');
  }

  contactRouter() {
    this.router.navigateByUrl('contact');
  }

  viewRouter() {
    this.router.navigateByUrl('view');
  }

}
