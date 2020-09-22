import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }
  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
  ) { }
  openProducts(value) {
    this.nav.navigateForward("/products/0/0/" + value);
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }

}
