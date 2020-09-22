import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../../../providers/config/config.service';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingService } from '../../../providers/loading/loading.service';

import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerImages=[
    "assets/images/banner_images/2.jpg",
    "assets/images/banner_images/1.jpg",
    "assets/images/banner_images/3.jpg",
  ];
  constructor(
    public shared: SharedDataService,
    public config: ConfigService,
  ) {

  }
  ngOnInit() { }
}
