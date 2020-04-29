import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public itemsLeft = [
    {'name': 'Home', 'url': ''},
    {'name': 'Category', 'url': 'category'},
    {'name': 'Account', 'url': 'account'},
  ];

  public itemsRight = [
    {'name': 'Login', 'url': 'login'},
    {'name': 'Register', 'url': 'register'}
  ];

  constructor() { }

  ngOnInit() {
  }

  showPanel(panel, navbar, search){
    panel.classList.toggle("show-panel");
    navbar.classList.toggle("adjust-radius");
    search.classList.toggle("search-move");
  }

}
