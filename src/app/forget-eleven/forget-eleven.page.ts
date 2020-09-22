import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-eleven',
  templateUrl: './forget-eleven.page.html',
  styleUrls: ['./forget-eleven.page.scss'],
})
export class ForgetElevenPage implements OnInit {
  public Items = [
    { icon: "", placeHolder: "Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
