import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {
  items = [
    { image: 'assets/template-themes/lesath/images/cart/1.png', title: 'Printed T-Shirt', price: '$ 100', size: 'L', color: 'grey', qty: '1' },
    { image: 'assets/template-themes/lesath/images/cart/2.png', title: 'Rose PatelShirt', price: '$ 130', size: 'L', color: 'red', qty: '2' }
  ]
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    this.nav.navigateForward('lb-home');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");  }
}
