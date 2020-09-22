import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

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
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('ls-home');
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(true, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
  }
}
