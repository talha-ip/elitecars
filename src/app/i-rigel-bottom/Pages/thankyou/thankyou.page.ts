import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor(private appEventsService: AppEventsService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
