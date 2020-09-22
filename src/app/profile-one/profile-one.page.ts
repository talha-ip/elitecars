import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.page.html',
  styleUrls: ['./profile-one.page.scss'],
})
export class ProfileOnePage implements OnInit {
  public Items = [
    { placeHolder: "First Name", type: "text", bindingText: "" },
    { placeHolder: "Last Name", type: "text", bindingText: "" },
    { placeHolder: "Email", type: "email", bindingText: "" },
    { placeHolder: "Password", type: "password", bindingText: "" },
    { placeHolder: "Phone No", type: "tel", bindingText: "" },
    { placeHolder: "Country", type: "text", bindingText: "" },
    { placeHolder: "City", type: "text", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
