import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-fourteen',
  templateUrl: './login-fourteen.page.html',
  styleUrls: ['./login-fourteen.page.scss'],
})
export class LoginFourteenPage implements OnInit {
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
