import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  items = [
    "Polo Men Shirt",
    "Casual Shirts (men)",
    "T-Shirt for Men",
    "Formal Shirts (men)",
    "Men Shirts",
    "Shirts"
  ]
  constructor(public menuCtrl: MenuController, public nav: NavController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('ls-home');
  }

  goToCart() {
    this.nav.navigateForward('ls-cart');
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
