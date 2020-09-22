import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-seven',
  templateUrl: './login-seven.page.html',
  styleUrls: ['./login-seven.page.scss'],
})
export class LoginSevenPage implements OnInit {
  public Items = [
    { icon: "assets/customIcons/person-login-one.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/customIcons/password-login-one.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
