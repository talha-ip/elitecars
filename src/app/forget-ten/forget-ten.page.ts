import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-ten',
  templateUrl: './forget-ten.page.html',
  styleUrls: ['./forget-ten.page.scss'],
})
export class ForgetTenPage implements OnInit {
  public Items = [
    { placeHolder: "Enter Your Email", type: "text", bindingText: "" },
  ];
  constructor() { }
  ngOnInit() {
  }

}
