import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-reward-points',
  templateUrl: './reward-points.page.html',
  styleUrls: ['./reward-points.page.scss'],
})
export class RewardPointsPage implements OnInit {
  public rewardCards = [
    { title: "Reward Points", action: "account-signup", points: "5", date: "July 30, 2019" },
    { title: "Reward Points", action: "Order Placed", points: "5", date: "July 30, 2019" }
  ]
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4')
  }
}
