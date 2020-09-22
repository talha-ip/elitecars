import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-tweleve',
  templateUrl: './forget-tweleve.page.html',
  styleUrls: ['./forget-tweleve.page.scss'],
})
export class ForgetTwelevePage implements OnInit {
  public Items = [
    { icon: "assets/custom-icons/email-forget-thirteen.svg", placeHolder: "First Name", type: "text", bindingText: "" },
 ];
  constructor() { }

  ngOnInit() {
  }

}
