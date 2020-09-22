import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  public slides = [
    { image: "assets/template-themes/lesath/images/new-arrival-image/1.png" },
  ];
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav:NavController) { }

  ngOnInit() {
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

  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  
}
