import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ConfigService } from '../i-becrux-side/providers/config/config.service';
import { SharedDataService } from '../i-becrux-side/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-thankyou-one',
  templateUrl: './thankyou-one.page.html',
  styleUrls: ['./thankyou-one.page.scss'],
})
export class ThankyouOnePage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public config: ConfigService, public shared: SharedDataService, public nav: NavController) { }
  
  ngOnInit() {
  }
}
