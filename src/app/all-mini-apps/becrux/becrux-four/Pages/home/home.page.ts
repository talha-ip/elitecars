import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../providers/config/config.service';
import { NavController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';

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

  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  openSubCategories(parent) {
    let count = 0;
    for (let value of this.shared.allCategories) {
      console.log()
      if (value.parent == parent.id) { count++; console.log(value) }
    }
    if (count != 0)
      this.nav.navigateForward("/categories/" + parent.id + "/" + parent.name);
    else
      this.nav.navigateForward("/products/" + parent.id + "/" + parent.name + "/newest");
  }
  openProducts(value) {
    this.nav.navigateForward("/products/0/0/" + value);
  }
  ngOnInit() {
  }

}
