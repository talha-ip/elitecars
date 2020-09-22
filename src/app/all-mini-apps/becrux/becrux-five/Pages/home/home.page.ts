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

  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
  ) {

  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  openSubCategories(parent) {
    let count = 0;
    for (let value of this.shared.allCategories) {
      if (value.parent == parent.id) { count++; }
    }
    if (count != 0)
      this.nav.navigateForward("/categories6/" + parent.id + "/" + parent.name);
    else
      this.nav.navigateForward("/products/" + parent.id + "/" + parent.name + "/newest");
  }
  ngOnInit() {
  }

}
