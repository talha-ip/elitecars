import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-integration',
  templateUrl: './payment-integration.page.html',
  styleUrls: ['./payment-integration.page.scss'],
})
export class PaymentIntegrationPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  paypal(){
    this.nav.navigateForward('paypal-method');
  }
  stripe(){
    this.nav.navigateForward('stripe-method');
  }
  paystack(){
    this.nav.navigateForward('paystack-method');
  }
  razorpay(){
    this.nav.navigateForward('razorpay-method');
  }
  braintree(){
    this.nav.navigateForward('braintree-method');
  }

}
