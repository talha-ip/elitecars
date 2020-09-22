import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  // let myElem = document.querySelector('#myElem');
  structure: any={lower:80, upper:120};
  small = false;
  medium = false;
  large = false;
  extraLarge = false;
  doubleExtraLarge = false;
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav:NavController) { }
  s(i) {
    if (i == 0) {
      this.small = true;
    }
    else {
      this.small = false;
    }
  }
  m(i) {
    if (i == 0) {
      this.medium = true;
    }
    else {
      this.medium = false;
    }
  }
  l(i) {
    if (i == 0) {
      this.large = true;
    }
    else {
      this.large = false;
    }
  }
  xl(i) {
    if (i == 0) {
      this.extraLarge = true;
    }
    else {
      this.extraLarge = false;
    }
  }
  xxl(i) {
    if (i == 0) {
      this.doubleExtraLarge = true;
    }
    else {
      this.doubleExtraLarge = false;
    }
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
