import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-fourteen',
  templateUrl: './register-fourteen.page.html',
  styleUrls: ['./register-fourteen.page.scss'],
})
export class RegisterFourteenPage implements OnInit {
  public Items = [
    { icon: "", placeHolder: "FIrst Name", type: "text", bindingText: "" },
    { icon: "", placeHolder: "Last Name", type: "text", bindingText: "" },
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
