import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

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
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('lb-home');
  }

  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}
