import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-google-analytics',
  templateUrl: './google-analytics.page.html',
  styleUrls: ['./google-analytics.page.scss'],
})
export class GoogleAnalyticsPage implements OnInit {

  constructor(private ga: GoogleAnalytics, public toastController: ToastController) {

    // For Google Analytics
    // Place Your Own Google Analytics Tracking ID 
    this.ga.startTrackerWithId('UA-155538952-1')
      .then(() => {
        console.log('Google analytics is ready now');
        // Tracker is ready
        // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Tracker is ready',
      message: 'Google analytics is ready now, You can now track pages or set additional information ',
      duration: 4000
    });
    toast.present();
  }

  ionViewDidEnter() {
    console.log('Google Analytics Page is now active');
    this.ga.trackView('Google Analytics Page');
  }
  ngOnInit() {
  }

  // For Event 1
  event1() {
    // To track a Screen (PageView)
    this.ga.trackView('Event 1 Screen Track ');

    // To set a UserId:
    this.ga.setUserId('123');

    //To set a specific app version:
    this.ga.setAppVersion('1.1')

    // To track an Event:
    this.ga.trackEvent('Check Out', 'Go to check out page', 'Button clicked from' + "Google Analytics Page", 1);

    // Toast Message
    this.event1Toast();
  }

  // Event 1 Toast
  async event1Toast() {
    const toast = await this.toastController.create({
      header: 'Event 1 Screen Track with Id= 123',
      message: 'Check Out Event Go to check out page from Goole Analytics Screen with App version 1.1',
      duration: 7000
    });
    toast.present();
  }

  // For Event 2
  event2() {
    // To track a Screen (PageView)
    this.ga.trackView('Event 2 Screen Track ');

    // To set a UserId:
    this.ga.setUserId('456');

    //To set a specific app version:
    this.ga.setAppVersion('1.2')

    // To track an Event:
    this.ga.trackEvent('Login', 'Go to Login page', 'Button clicked from' + "Google Analytics Page", 1);

    // Toast Message
    this.event2Toast();
  }

  // Event 2 Toast
  async event2Toast() {
    const toast = await this.toastController.create({
      header: 'Event 2 Screen Track with Id= 456',
      message: 'Login Event Go to check out page from Goole Analytics Screen with App version 1.1',
      duration: 7000
    });
    toast.present();
  }

  // For Event 3
  event3() {
    // To track a Screen (PageView)
    this.ga.trackView('Event 3 Screen Track ');

    // To set a UserId:
    this.ga.setUserId('789');

    //To set a specific app version:
    this.ga.setAppVersion('1.3')

    // To track an Event:
    this.ga.trackEvent('Cart', 'Go to Cart page', 'Button clicked from' + "Google Analytics Page", 1);

    // Toast Message
    this.event3Toast();
  }

  // Event 3 Toast
  async event3Toast() {
    const toast = await this.toastController.create({
      header: 'Event 3 Screen Track with Id= 789',
      message: 'Cart Event Go to check out page from Goole Analytics Screen with App version 1.3',
      duration: 7000
    });
    toast.present();
  }
}
