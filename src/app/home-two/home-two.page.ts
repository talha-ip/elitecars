import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController, MenuController, NavController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.page.html',
  styleUrls: ['./home-two.page.scss'],
})
export class HomeTwoPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 

  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
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
}
