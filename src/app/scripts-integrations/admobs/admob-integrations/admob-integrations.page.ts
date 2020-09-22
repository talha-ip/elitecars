import { Component, OnInit } from '@angular/core';
import { AdmobFreeService } from '../admob-free.service';

@Component({
  selector: 'app-admob-integrations',
  templateUrl: './admob-integrations.page.html',
  styleUrls: ['./admob-integrations.page.scss'],
})
export class AdmobIntegrationsPage implements OnInit {
  constructor(
    private admobFreeService: AdmobFreeService,
  ) { }

  ngOnInit() {
  }

  // For Banner Ads
  showBanner() {
    this.admobFreeService.BannerAd();
  }

  // For Hide Banner Ads
  hideBanner() {
    this.admobFreeService.hideBanner();
  }

  // For Interstitial Ads
  showInterstitialVideo() {
    this.admobFreeService.InterstitialVideoAd();
  }
  // For Reward Ads
  showRewardVideo() {
    this.admobFreeService.RewardVideoAd();
  }

}
