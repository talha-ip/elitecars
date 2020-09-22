import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-ten',
  templateUrl: './register-ten.page.html',
  styleUrls: ['./register-ten.page.scss'],
})
export class RegisterTenPage implements OnInit {
  public Items = [
    { placeHolder: "First Name", type: "text", bindingText: "" },
    { placeHolder: "Last Name", type: "text", bindingText: "" },
    { placeHolder: "Email", type: "text", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
