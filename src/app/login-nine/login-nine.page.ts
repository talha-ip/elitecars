import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-nine',
  templateUrl: './login-nine.page.html',
  styleUrls: ['./login-nine.page.scss'],
})
export class LoginNinePage implements OnInit {
  public Items = [
    { icon: "assets/customIcons/person-login-three.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/customIcons/password-login-three.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
