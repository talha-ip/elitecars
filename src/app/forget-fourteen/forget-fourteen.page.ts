import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-fourteen',
  templateUrl: './forget-fourteen.page.html',
  styleUrls: ['./forget-fourteen.page.scss'],
})
export class ForgetFourteenPage implements OnInit {
  public Items = [
    { icon: "", placeHolder: "Email", type: "email", bindingText: "" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
