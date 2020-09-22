import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.page.html',
  styleUrls: ['./shipping.page.scss'],
})
export class ShippingPage implements OnInit {
  segments: any = 'shipping';
  paymentOne = false;
  visiableItem = true;
  formData = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    city: ''
  };
  formDataPayment = {
    nameOnCard: '',
    cardNumber: '',
    expirationCard: '',
    securityCode: ''
  }
  items = [
    { image: 'assets/template-themes/lesath/images/order/1.png', title: 'Polo T-Shirt', price: '$ 100', size: 'L', color: 'grey' },
    { image: 'assets/template-themes/lesath/images/order/2.png', title: 'Cotton Casual Shirt', price: '$ 130', size: 'L', color: 'red' }
  ]
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController) { }
  ngOnInit() {
  }
  goToMaster(i) {
    if (i == 0)
      this.visiableItem = false;
    else
      this.visiableItem = true;
  }
  go() {
    this.segments = 'payment';
  }

  goToThankYou() {
    this.nav.navigateForward('lb-thank-you');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}
