import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }
  dismiss() {
    this.nav.navigateForward("ls-news");
  }
  goToSearch() {
    this.nav.navigateForward('ls-search');
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
