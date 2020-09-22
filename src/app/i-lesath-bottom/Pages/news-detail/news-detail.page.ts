import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor( public appEventsService: AppEventsService,public nav:NavController) { }

  ngOnInit() {
  }
  dismiss(){
    this.nav.navigateForward("lb-news");
  }
  goToSearch() {
    this.nav.navigateForward('lb-search');
  }

  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
