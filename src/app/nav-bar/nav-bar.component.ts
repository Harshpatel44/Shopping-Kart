import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public itemsLeft = [
    {'name': 'Home', 'url': ''},
    {'name': 'Show', 'url': ''},
    {'name': 'About Us', 'url': 'aboutUs'},
    {'name': 'Contact Us', 'url': 'contactUs'}
  ];

  public itemsRight = [
    {'name': 'Reset', 'url': 'reset'},
    {'name': 'Login', 'url': 'login'},
    {'name': 'Register', 'url': 'register'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
