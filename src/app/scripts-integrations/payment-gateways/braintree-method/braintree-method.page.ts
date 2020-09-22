import { Component, OnInit } from '@angular/core';

declare var braintree;
@Component({
  selector: 'app-braintree-method',
  templateUrl: './braintree-method.page.html',
  styleUrls: ['./braintree-method.page.scss'],
})
export class BraintreeMethodPage implements OnInit {

  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';
  constructor() {

  }

  ngOnInit() {
  }

  pay() {
    var button = document.querySelector('#submit-button');

    braintree.dropin.create({
      authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
      selector: '#dropin-container'
    }, function (err, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {
          // Submit payload.nonce to your server
        });
      })
    });
  }
}
