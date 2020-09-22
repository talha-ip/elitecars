import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-two',
  templateUrl: './signup-two.page.html',
  styleUrls: ['./signup-two.page.scss'],
})
export class SignupTwoPage implements OnInit {
  formData = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
