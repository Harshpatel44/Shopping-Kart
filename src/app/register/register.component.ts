import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public temp=[];
  constructor() { }

  ngOnInit() {
  }

  focus_func(val,i)
  {
  this.temp=[];
  this.temp[i]=val.getAttribute("placeholder");
  }

  focusout_func(val,i)
  {
    this.temp=[];
  }

}
