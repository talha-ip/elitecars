import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../../../providers/config/config.service';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sliderConfig = {
    slidesPerView: 2.5,
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
