import { Component, OnInit } from '@angular/core';

import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-firebase-analytics',
  templateUrl: './firebase-analytics.page.html',
  styleUrls: ['./firebase-analytics.page.scss'],
})
export class FirebaseAnalyticsPage implements OnInit {

  constructor(private firebaseAnalytics: FirebaseAnalytics, public toastController: ToastController) {
    this.presentToast();
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Tracker is ready',
      message: 'Firebase analytics is ready now, You can now track pages or set additional information ',
      duration: 4000
    });
    toast.present();
  }

  // For Event 1
  event1() {
    // To track a Screen (PageView)
    // For Firebase Analytics
    this.firebaseAnalytics.logEvent('page_view', { pram: "Firebase Analytics 1" })
      .then((res: any) => console.log("Result" + res))
      .catch((error: any) => console.error(error));

    // To set a UserId:
    this.firebaseAnalytics.setUserId("123").then((res: any) => console.log("UserID" + res))
      .catch((error: any) => console.error(error));

    //To set a specific app version:
    this.firebaseAnalytics.setCurrentScreen("Set Check Out Screen").then((res: any) => console.log("Current Screen" + res))
      .catch((error: any) => console.error(error));

    this.firebaseAnalytics.setUserProperty("Test", "123").then((res: any) => console.log("User Property" + res))
      .catch((error: any) => console.error(error));
    // Toast Message
    this.event1Toast();
  }

  // Event 1 Toast
  async event1Toast() {
    const toast = await this.toastController.create({
      header: 'Event 1 Screen Track with Id= 123',
      message: 'Check Out Event Go to check out page from Current Firebase Analytics Screen',
      duration: 7000
    });
    toast.present();
  }

  // For Event 2
  event2() {
    // To track a Screen (PageView)
    // For Firebase Analytics
    this.firebaseAnalytics.logEvent('page_view', { pram: "Firebase Analytics 2" })
      .then((res: any) => console.log("Result" + res))
      .catch((error: any) => console.error(error));

    // To set a UserId:
    this.firebaseAnalytics.setUserId("456").then((res: any) => console.log("UserID" + res))
      .catch((error: any) => console.error(error));

    //To set a specific app version:
    this.firebaseAnalytics.setCurrentScreen("Set Login Screen").then((res: any) => console.log("Current Screen" + res))
      .catch((error: any) => console.error(error));

    // Toast Message
    this.event2Toast();
  }

  // Event 2 Toast
  async event2Toast() {
    const toast = await this.toastController.create({
      header: 'Event 2 Screen Track with Id= 456',
      message: 'Login Event Go to Login page from Current Firebase Analytics Screen',
      duration: 7000
    });
    toast.present();
  }

  // For Event 3
  event3() {
    // To track a Screen (PageView)
    // For Firebase Analytics
    this.firebaseAnalytics.logEvent('page_view', { pram: "Firebase Analytics 3" })
      .then((res: any) => console.log("Result" + res))
      .catch((error: any) => console.error(error));

    // To set a UserId:
    this.firebaseAnalytics.setUserId("789").then((res: any) => console.log("UserID" + res))
      .catch((error: any) => console.error(error));

    //To set a specific app version:
    this.firebaseAnalytics.setCurrentScreen("Set Cart Screen").then((res: any) => console.log("Current Screen" + res))
      .catch((error: any) => console.error(error));

    // Toast Message
    this.event3Toast();
  }

  // Event 3 Toast
  async event3Toast() {
    const toast = await this.toastController.create({
      header: 'Event 3 Screen Track with Id= 789',
      message: 'Cart Event Go to Cart page from Current Firebase Analytics Screen',
      duration: 7000
    });
    toast.present();
  }
}
