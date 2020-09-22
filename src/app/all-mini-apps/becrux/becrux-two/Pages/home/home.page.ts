import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  constructor(
    public shared: SharedDataService) {
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
}
