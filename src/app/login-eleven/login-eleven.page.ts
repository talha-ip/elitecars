import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-eleven',
  templateUrl: './login-eleven.page.html',
  styleUrls: ['./login-eleven.page.scss'],
})
export class LoginElevenPage implements OnInit {
  public Items = [
    { icon: "", placeHolder: "Email", type: "email", bindingText: "" },
    { icon: "assets/customIcons/login-five-pass-show.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }
  showPass(i) {

    if (i == 1) {
      if (this.Items[i].type == "password") {
        this.Items[i].type = "text";
      }
      else {
        this.Items[i].type = "password";
      }
    }
  }
}
