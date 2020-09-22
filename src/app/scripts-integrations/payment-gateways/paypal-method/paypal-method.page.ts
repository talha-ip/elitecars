import { Component, OnInit } from '@angular/core';

import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypal-method',
  templateUrl: './paypal-method.page.html',
  styleUrls: ['./paypal-method.page.scss'],
})
export class PaypalMethodPage implements OnInit {

  constructor(private payPal: PayPal) {

  }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  payWithPaypal() {
    console.log("Pay ????");
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'Ab-oYAwGRJmBaKLOJb4SUgkXNMgbWCmxGcIv_GMBxCGI3Mpi4z7EcGGh8Mtb_WM14txD_s-Cqhyk54y5'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          alert('Payment Succesfully: ' + JSON.stringify(res));


          // Successfully paid

          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (err) => {
          // Error or render dialog closed without being successful
          console.log("Error or render dialog closed without being successful");
          console.log(err);
        });
      }, (err) => {
        // Error in configuration
        console.log("Error in configuration");
        console.log(err);
      });
    }, (err) => {
      // Error in initialization, maybe PayPal isn't supported or something else
      console.log("Error in initialization, maybe PayPal isn't supported or something else");
      console.log(err);
    });
  }
  ngOnInit() {
  }
}
