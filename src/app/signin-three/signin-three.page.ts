import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-three',
  templateUrl: './signin-three.page.html',
  styleUrls: ['./signin-three.page.scss'],
})
export class SigninThreePage implements OnInit {
  public login = false;
  public listLoginItems = [
    { icon: "assets/iconIShoe/username.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/iconIShoe/password.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }
}
