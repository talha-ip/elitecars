import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razorpay-method',
  templateUrl: './razorpay-method.page.html',
  styleUrls: ['./razorpay-method.page.scss'],
})
export class RazorpayMethodPage implements OnInit {

  paymentAmount: number = 333;
  currency: string = 'INR';
  currencyIcon: string = '$';
  razor_key = 'rzp_test_DFHaC0425b1WNg';
  cardDetails: any = {};

  constructor() {
  }

  payWithRazor() {
    var options = {
      description: 'RazorPay Payment Gateway Testing',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency,
      key: this.razor_key,
      amount: this.paymentAmount,
      name: 'Test',
      prefill: {
        email: 'ui.themescoder@gmail.com',
        contact: '+923471798828',
        name: 'Hassan'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('Payment Succesfully: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  ngOnInit() {
  }

}