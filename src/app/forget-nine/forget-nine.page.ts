import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-nine',
  templateUrl: './forget-nine.page.html',
  styleUrls: ['./forget-nine.page.scss'],
})
export class ForgetNinePage implements OnInit {
  public Items = [
    { icon: "assets/custom-icons/email-fill-forget-seven.svg", placeHolder: "Enter Your Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
