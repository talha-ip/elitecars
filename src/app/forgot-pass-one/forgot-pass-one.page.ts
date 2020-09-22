import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass-one',
  templateUrl: './forgot-pass-one.page.html',
  styleUrls: ['./forgot-pass-one.page.scss'],
})
export class ForgotPassOnePage implements OnInit {
  formData = {
    customers_email_address: '',
  };
  errorMessage = '';
  constructor() { }

  ngOnInit() {
  }

}
