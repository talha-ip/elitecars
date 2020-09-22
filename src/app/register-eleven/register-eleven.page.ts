import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-eleven',
  templateUrl: './register-eleven.page.html',
  styleUrls: ['./register-eleven.page.scss'],
})
export class RegisterElevenPage implements OnInit {
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
