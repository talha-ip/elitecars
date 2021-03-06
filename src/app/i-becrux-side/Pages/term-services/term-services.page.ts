import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-term-services',
  templateUrl: './term-services.page.html',
  styleUrls: ['./term-services.page.scss'],
})
export class TermServicesPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    public nav: NavController,
    public mdCtrl: ModalController,
    public config: ConfigService,
    translate: TranslateService, ) { }
  ngOnInit() {
  }
  // For Modal Dismiss
  dismiss() {
    this.mdCtrl.dismiss();
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
