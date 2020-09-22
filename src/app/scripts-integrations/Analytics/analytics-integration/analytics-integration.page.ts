import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-analytics-integration',
  templateUrl: './analytics-integration.page.html',
  styleUrls: ['./analytics-integration.page.scss'],
})
export class AnalyticsIntegrationPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  googleAnalytics() {
    this.nav.navigateForward('google-analytics')
  }

  firebaseAnalytics() {
    this.nav.navigateForward('firebase-analytics')
  }

  flurryAnalytics() {
    this.nav.navigateForward('flurry-analytics')
  }
}