import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-eight',
  templateUrl: './login-eight.page.html',
  styleUrls: ['./login-eight.page.scss'],
})
export class LoginEightPage implements OnInit {
  public Items = [
    { icon: "assets/CustomIcons/person-login-one.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/CustomIcons/password-login-one.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
