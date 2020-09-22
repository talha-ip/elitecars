import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
import { Platform, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AdmobFreeService {

  //Interstitial Ad's Configurations
  interstitialVideoConfig: AdMobFreeInterstitialConfig = {
    // add your config here
    // for the sake of this example we will just use the test config
    isTesting: true,
    autoShow: false,
    id: "ca-app-pub-3940256099942544/8691691433"
  };

  //Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    isTesting: true, // Remove in production
    autoShow: false,
    id: "ca-app-pub-3940256099942544/5224354917"
  };

  constructor(
    private admobFree: AdMobFree,
    public platform: Platform,
    public toastController: ToastController
  ) {

    platform.ready().then(() => {

      // Load ad configuration for interstitial
      this.admobFree.interstitial.config(this.interstitialVideoConfig);
      //Prepare Ad to Show
      this.admobFree.interstitial.prepare()
        .then(() => {
          // alert(1);
        }).catch(e => alert(e));

      // Load ad configuration reward video
      this.admobFree.rewardVideo.config(this.RewardVideoConfig);
      //Prepare Ad to Show
      this.admobFree.rewardVideo.prepare()
        .then(() => {
          // alert(2);
        }).catch(e => alert(e));

    });

    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      alert("Interstitial CLOSE");
      this.admobFree.interstitial.prepare()
        .then(() => {
        }).catch(e => alert(e));
    });
    //Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      alert("Reward Video CLOSE");
      this.admobFree.rewardVideo.prepare()
        .then(() => {
        }).catch(e => alert(e));
    });

    //Handle Reward's for User To Watch Full Video
    this.admobFree.on('admob.rewardvideo.events.REWARD').subscribe(() => {
      this.toastReward();
    });
  }

  // For Reward Video Toast Method
  async toastReward() {
    const toast = await this.toastController.create({
      header: 'Video Reward',
      message: 'User Rewarded 10 Points For Watch Full Video',
      duration: 5000
    });
    toast.present();
  }

  // For Banner Ads
  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-3940256099942544/6300978111"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  // For Hide Banner Ads
  hideBanner() {
    this.platform
      .ready()
      .then(() => {
        this.admobFree.banner.hide().catch();
      })
      .catch(e => console.log(e));
  }

  // For Interstitial Video Ads
  InterstitialVideoAd() {
    //Check if Ad is loaded
    this.admobFree.interstitial.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.interstitial.show().then(() => {
      })
        .catch(e => alert("show " + e));
    })
      .catch(e => alert("isReady " + e));
  }

  // For Reward Video Ads
  RewardVideoAd() {
    //Check if Ad is loaded
    this.admobFree.rewardVideo.isReady().then(() => {
      //Will show prepared Ad
      this.admobFree.rewardVideo.show().then(() => {
      })
        .catch(e => alert("show " + e));
    })
      .catch(e => alert("isReady " + e));
  }
}
