import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-thirteen',
  templateUrl: './login-thirteen.page.html',
  styleUrls: ['./login-thirteen.page.scss'],
})
export class LoginThirteenPage implements OnInit {
  public Items = [
    { icon: "assets/customIcons/login-six-person.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/customIcons/login-six-password.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
