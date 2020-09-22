import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.page.html',
  styleUrls: ['./refund-policy.page.scss'],
})
export class RefundPolicyPage implements OnInit {

  constructor( public appEventsService: AppEventsService,public nav:NavController) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
