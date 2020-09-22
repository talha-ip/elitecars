import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

import { FlurryAnalytics, FlurryAnalyticsObject, FlurryAnalyticsOptions } from '@ionic-native/flurry-analytics/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-flurry-analytics',
  templateUrl: './flurry-analytics.page.html',
  styleUrls: ['./flurry-analytics.page.scss'],
})
export class FlurryAnalyticsPage implements OnInit {

  fa: FlurryAnalyticsObject;

  constructor(private flurryAnalytics: FlurryAnalytics, public toastController: ToastController) {
    // For Flurry Analytics
    // Place Your Own Flurry Analytics App key
    const options: FlurryAnalyticsOptions = {
      appKey: 'TQMFQTRXDVZVQZN4NMPN', // REQUIRED
      reportSessionsOnClose: true,
      enableLogging: true
    }

    this.fa = this.flurryAnalytics.create(options);

    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Tracker is ready',
      message: 'Flurry analytics is ready now, You can now track pages or set additional information ',
      duration: 4000
    });
    toast.present();
  }

  ngOnInit() {
  }

  // For Event 1
  event1() {
    // To track a Screen (PageView)
    this.fa.logPageView()
      .then(() => console.log('Logged an event!'))
      .catch(e => console.log('Error logging the event', e));


    // For Firebase Analytics
    this.fa.logEvent('Page visited', 'Check Out Page')
      .then(() => console.log('Logged an event!'))
      .catch(e => console.log('Error logging the event', e));

    // Toast Message
    this.event1Toast();
  }

  // Event 1 Toast
  async event1Toast() {
    const toast = await this.toastController.create({
      header: 'Event 1 Screen Track ',
      message: 'Check Out Event Go to check out page from Current Flurry Analytics Screen',
      duration: 7000
    });
    toast.present();
  }


}
