import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-six',
  templateUrl: './aboutus-six.page.html',
  styleUrls: ['./aboutus-six.page.scss'],
})
export class AboutusSixPage implements OnInit {
  itemCol = [
    { icon: "call",text:"000-123-456-789" },
    { icon: "mail", text:"abc12@gmail.com" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
