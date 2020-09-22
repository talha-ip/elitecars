import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stripe-method',
  templateUrl: './stripe-method.page.html',
  styleUrls: ['./stripe-method.page.scss'],
})
export class StripeMethodPage implements OnInit {
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';
  stripe_key = 'pk_test_dxhd4xzE2a79wNQ4oShnflj600iMReYGya';

  // For Payment Requirements
  cardDetails = {
    number: '',
    expMonth: 0,
    expYear: 0,
    cvc: ''
  };
  ngOnInit() {
  }

  constructor(private stripe: Stripe, private toastController: ToastController) {
  }

  payWithStripe() {
    this.stripe.setPublishableKey(this.stripe_key);


    this.stripe.createCardToken(this.cardDetails)
      .then(token => {
        console.log(token);
        this.toastLine(token)
      })
      .catch(error => console.error(error));
  }

  async toastLine(val) {
    const toast = await this.toastController.create({
      header: 'Access Token From Stripe Server!',
      message: JSON.stringify(val.id),
      duration: 7000
    });
    toast.present();
  }
}