import { Component, OnInit } from '@angular/core';

import { ToastController, Platform, AlertController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-push-notification-integrations',
  templateUrl: './push-notification-integrations.page.html',
  styleUrls: ['./push-notification-integrations.page.scss'],
})
export class PushNotificationIntegrationsPage implements OnInit {

  constructor(public alertController: AlertController, public plt: Platform,
    private fcm: FCM, public toastController: ToastController, private oneSignal: OneSignal,
  ) {

    // For FCM Notifications
    this.plt.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log(data);
            console.log("Received in background");
          } else {
            console.log(data);
            this.FCMAlert(data);
            console.log("Received in foreground");
          };
        });
        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
      });

    // For OneSignal Notifications
    this.setupPush();
  }

  ngOnInit() {
  }

  // For FCM Get Token
  getToken() {
    this.fcm.getToken()
      .then(token => {
        this.toastFCM(token);
      })
      .catch(e => console.log('Error Token into FCM', e));;
  }

  async toastFCM(val) {
    const toast = await this.toastController.create({
      header: 'Firebase Cloud Messaging Token Access Successfuly!',
      message: JSON.stringify(val),
      duration: 7000
    });
    toast.present();
  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }

  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }

  async FCMAlert(data) {
    const alert = await this.alertController.create({
      header: 'FCM Push Notification',
      subHeader: JSON.stringify(data.title),
      message: JSON.stringify(data.body),
      buttons: ['OK']
    });
    await alert.present();
  }

  // For OneSignal Notification
  setupPush() {
    console.log("called ...");
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('66a18fa5-8885-43cb-9e66-87e490581b8e', '995838446462');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      console.log("OneSignal DATA Recieved");
      console.log(data);
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      console.log("OneSignal DATA Opened");
      console.log(data);

      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;

      this.showAlert('Notification opened', 'You already read this before');
    });

    this.oneSignal.endInit();
  }

  async showAlert(title, msg) {
    console.log("alert called");
    const alert = await this.alertController.create({
      header: 'OneSignal Push Notification',
      subHeader: JSON.stringify(title),
      message: JSON.stringify(msg),
      buttons: ['OK']
    });
    await alert.present();
  }

}
