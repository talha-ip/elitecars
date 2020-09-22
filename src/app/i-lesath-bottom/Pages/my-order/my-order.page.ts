import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {
  segments: any = 'current';//main segment
  themeColor: any;
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController, public theme: ThemeService) {


    this.theme.getTheme().then((result) => {
      let val = result;
      if (val == undefined) {
      }
      else {
        this.themeColor = val;
        // const current = document.getElementById('current');
        // current.setAttribute('--background','white');
      }
    });
  }

  ngOnInit() {
  }

  goToOrderDetails() {
    this.nav.navigateForward('lb-order-details');
  }

  dismiss() {
    this.nav.navigateForward('lb-home');
  }

  onCurrent() {
    const current = document.getElementById('history');
    current.style.background = this.themeColor;
  }

  onHistory() {
    const history = document.getElementById('current');
    history.style.background = this.themeColor;
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(true, 'Menu3');
  }
  // Pinch Gesture For Go Back to Home
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");  }
}
