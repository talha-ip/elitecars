import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-seven',
  templateUrl: './forget-seven.page.html',
  styleUrls: ['./forget-seven.page.scss'],
})
export class ForgetSevenPage implements OnInit {
  public Items = [
    { icon: "assets/custom-icons/email-fill-forget-seven.svg", placeHolder: "Enter Your Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
