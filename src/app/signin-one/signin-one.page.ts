import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-one',
  templateUrl: './signin-one.page.html',
  styleUrls: ['./signin-one.page.scss'],
})
export class SigninOnePage implements OnInit {
  formData = {
    username: '',
    password: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
