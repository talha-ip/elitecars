import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  reviews = [{ name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" },
  { name: "Smith Will", date_created: "28-08-2019", rating: "50", review: "this is lorum ipsum" }];
  constructor(public nav: NavController, public menuCtrl: MenuController,public appEventsService: AppEventsService
  ) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
