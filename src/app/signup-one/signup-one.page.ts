import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-one',
  templateUrl: './signup-one.page.html',
  styleUrls: ['./signup-one.page.scss'],
})
export class SignupOnePage implements OnInit {
  formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    wpgdprc: 1,
    register: 'Register'
  };
  constructor() { }

  ngOnInit() {
  }

}
