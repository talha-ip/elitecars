import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-twelve',
  templateUrl: './register-twelve.page.html',
  styleUrls: ['./register-twelve.page.scss'],
})
export class RegisterTwelvePage implements OnInit {
  public Items = [
    { icon: "assets/customIcons/login-six-person.svg", placeHolder: "First Name", type: "text", bindingText: "" },
    { icon: "assets/customIcons/login-six-person.svg", placeHolder: "Last Name", type: "text", bindingText: "" },
    { icon: "assets/customIcons/login-six-person.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/customIcons/login-six-password.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }
  ngOnInit() {
  }
}