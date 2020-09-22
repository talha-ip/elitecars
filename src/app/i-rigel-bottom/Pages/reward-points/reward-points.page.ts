import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

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
  constructor(private appEventsService: AppEventsService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
