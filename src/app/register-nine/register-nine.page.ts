import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-nine',
  templateUrl: './register-nine.page.html',
  styleUrls: ['./register-nine.page.scss'],
})
export class RegisterNinePage implements OnInit {
  public Items = [
    { placeHolder: "First name", type: "text", bindingText: "" },
    { placeHolder: "Last name", type: "text", bindingText: "" },
    { placeHolder: "Email", type: "text", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }
  ngOnInit() {
  }
}