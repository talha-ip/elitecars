import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-eight',
  templateUrl: './register-eight.page.html',
  styleUrls: ['./register-eight.page.scss'],
})
export class RegisterEightPage implements OnInit {
  public Items = [
    { placeHolder: "First Name", type: "text", bindingText: "" },
    { placeHolder: "Last Name", type: "text", bindingText: "" },
    { placeHolder: "Email", type: "email", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
    { placeHolder: "Confirm Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
