import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-three',
  templateUrl: './signup-three.page.html',
  styleUrls: ['./signup-three.page.scss'],
})
export class SignupThreePage implements OnInit {
  public listInputItems = [
    { placeHolder: "First Name:", type: "text" },
    { placeHolder: "Last Name:", type: "text" },
    { placeHolder: "Password:", type: "password" },
    { placeHolder: "Email:", type: "email" },
    { placeHolder: "Phone:", type: "tel" },
    { placeHolder: "City:", type: "text" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
