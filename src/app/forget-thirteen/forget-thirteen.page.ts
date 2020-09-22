import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-thirteen',
  templateUrl: './forget-thirteen.page.html',
  styleUrls: ['./forget-thirteen.page.scss'],
})
export class ForgetThirteenPage implements OnInit {
  public Items = [
    { icon: "assets/custom-icons/email-forget-thirteen.svg", placeHolder: "Enter Your Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
