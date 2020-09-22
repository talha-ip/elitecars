import { Component, OnInit } from '@angular/core';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LineLogin } from '@ionic-native/line-login/ngx';

import { ToastController, Platform, AlertController } from '@ionic/angular';
// For LinkedIn
import { LinkedIn } from "ng2-cordova-oauth/core";
import { LoadingController } from "@ionic/angular";
import { OauthCordova } from "ng2-cordova-oauth/platform/cordova";
import { LinkedinService } from "../linkedin.service";
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { DropboxService } from '../../cloud-storage-integrations/dropbox.service';
@Component({
  selector: 'app-social-login-integrations',
  templateUrl: './social-login-integrations.page.html',
  styleUrls: ['./social-login-integrations.page.scss'],
})
export class SocialLoginIntegrationsPage implements OnInit {
  private loading: any;
  constructor(private fb: Facebook, public alertController: AlertController,
    private googlePlus: GooglePlus, private lineLogin: LineLogin,
    public toastController: ToastController, public dropbox: DropboxService,
    private linkedinService: LinkedinService,
    private loadingController: LoadingController, private platform: Platform,
    private authService: AuthService, ) { }
  ngOnInit() {
  }

  // For Facebook Login
  loginFacebook() {
    this.fb.login(['public_profile', 'email'])
      .then(res => {
        this.toastFacebook(res);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  async toastFacebook(val) {
    const toast = await this.toastController.create({
      header: 'Logged into Facebook Succesfully!',
      message: JSON.stringify(val),
      duration: 7000
    });
    toast.present();
  }

  // For Google Plus Login

  loginGooglePlus() {
    this.googlePlus.login({})
      .then(res => {
        this.toastGoogle(res);
      })
      .catch(e => console.log('Error logging into Google', e));
  }

  async toastGoogle(val) {
    const toast = await this.toastController.create({
      header: 'Logged into Google Succesfully!',
      message: JSON.stringify(val),
      duration: 7000
    });
    toast.present();
  }

  // For Line Login
  loginLine() {
    this.lineLogin.initialize({ channel_id: "1653737120" })

    this.lineLogin.login()
      .then(res => {
        this.toastLine(res);
      })
      .catch(e => console.log('Error logging into Line', e));
  }

  async toastLine(val) {
    const toast = await this.toastController.create({
      header: 'Logged into Line Succesfully!',
      message: JSON.stringify(val),
      duration: 7000
    });
    toast.present();
  }

  // For Dropbox Login
  loginDropbox() {
    // Dropbox service called login method in cloud-storage-integrations/dropbox/dropbox.service.ts 
    this.dropbox.login().then((success) => {
      console.log("Success");
      console.log(success);
      this.toastDropbox(success);
    }, (err) => {
      console.log(err);
    });
  }

  async toastDropbox(val) {
    const toast = await this.toastController.create({
      header: 'Logged into Line Succesfully!',
      message: JSON.stringify(val),
      duration: 7000
    });
    toast.present();
  }

  loginTwitter() {

  }

  loginLinkedin() {
    this.presentLoading();
    const provider = new LinkedIn({
      clientId: '86vnyujk9skix3',
      appScope: ["r_emailaddress", "r_liteprofile"],
      redirectUri: "http://localhost/callback",
      responseType: "code",
      state: this.linkedinService.getRandomState()
    });
    const oauth = new OauthCordova();

    this.platform.ready().then(() => {
      oauth
        .logInVia(provider)
        .then(success => {
          this.linkedinService
            .getAccessToken(success["code"])
            .then(data => {
              const parsedResponse = JSON.parse(data.data);
              const accessToken = parsedResponse.access_token;

              const namePromise = this.linkedinService.getName(
                accessToken
              );
              const picPromise = this.linkedinService.getProfilePic(
                accessToken
              );
              const emailPromise = this.linkedinService.getEmail(
                accessToken
              );

              Promise.all([namePromise, picPromise, emailPromise])
                .then(results => {
                  console.log("Results");
                  console.log(results);
                  const name = results[0];
                  const pic = results[1];
                  const email = results[2];

                  console.log(name, email, pic);
                  this.loading.dismiss();

                  this.showAlert(
                    "Login Succesfully",
                    JSON.stringify(results)
                  );
                })
                .catch(err => {
                  console.error("Error: Second");
                  console.error(err);
                  this.loading.dismiss();
                  this.showAlert(
                    "Error Second",
                    "Something went wrong"
                  );
                });
            })
            .catch(err => {
              console.error("Error: Third");
              console.error(err);
              this.loading.dismiss();
              console.error(err);
              this.showAlert("Error Third", "Something went wrong");
            });
        })
        .catch(err => {
          console.error("Error: Fourth");
          console.error(err);
          this.loading.dismiss();
          this.showAlert("Error Fourth", "Something went wrong");
        });
    });
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Loading"
    });
    await this.loading.present();
  }

  async showAlert(title: string, msg: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ["OK"]
    });

    await alert.present();
  }
}
