import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-eight',
  templateUrl: './forget-eight.page.html',
  styleUrls: ['./forget-eight.page.scss'],
})
export class ForgetEightPage implements OnInit {
  public Items = [
    { icon: "assets/custom-icons/email-fill-forget-seven.svg", placeHolder: "Enter Your Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
