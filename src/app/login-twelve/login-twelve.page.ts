import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-twelve',
  templateUrl: './login-twelve.page.html',
  styleUrls: ['./login-twelve.page.scss'],
})
export class LoginTwelvePage implements OnInit {
  public Items = [
    { icon: "assets/customIcons/login-six-person.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/customIcons/login-six-password.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
