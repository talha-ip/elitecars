import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  items = [
    { image: 'assets/template-themes/lesath/images/cart/1.png', title: 'Rose Petel Shirt', price: '$ 130', size: 'L', color: 'danger', qty: '1' },
    { image: 'assets/template-themes/lesath/images/cart/2.jpg', title: 'Printed Casual Shirt', price: '$ 100', size: 'L', color: 'danger', qty: '2' }
  ]
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('lb-home');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
