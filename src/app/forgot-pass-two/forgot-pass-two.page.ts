import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass-two',
  templateUrl: './forgot-pass-two.page.html',
  styleUrls: ['./forgot-pass-two.page.scss'],
})
export class ForgotPassTwoPage implements OnInit {
  formData = {
    email: ''
    };
  constructor() { }

  ngOnInit() {
  }

}
