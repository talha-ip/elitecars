import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ten',
  templateUrl: './login-ten.page.html',
  styleUrls: ['./login-ten.page.scss'],
})
export class LoginTenPage implements OnInit {
  public Items = [
    { placeHolder: "Email", type: "text", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
