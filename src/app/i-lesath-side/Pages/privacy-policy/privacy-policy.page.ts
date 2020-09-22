import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(public nav: NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
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
