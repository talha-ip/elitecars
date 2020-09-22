import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-seven',
  templateUrl: './register-seven.page.html',
  styleUrls: ['./register-seven.page.scss'],
})
export class RegisterSevenPage implements OnInit {
  public Items = [
    { placeHolder: "First Name", type: "text", bindingText: "" },
    { placeHolder: "Last Name", type: "text", bindingText: "" },
    { placeHolder: "Email", type: "email", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
