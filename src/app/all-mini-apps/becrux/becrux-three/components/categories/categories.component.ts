import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../../providers/config/config.service';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { NavController } from '@ionic/angular';
import { AppEventsService } from '../../../../../services/app-events.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input('type') type;
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  }
  sliderConfig2 = {
    slidesPerView: 3.5,
    spaceBetween: 0
  }

  constructor(
    public config: ConfigService,
    public shared: SharedDataService,
    public nav: NavController,
    public appEventsService: AppEventsService
    ) {

  }
  openSubCategories(parent) {
    let count = 0;
    for (let val of this.shared.subCategories) {
      if (val.parent == parent.id) count++;
    }
    if (count == 0)
      this.nav.navigateForward("/products/" + parent.id + "/" + parent.name + "/newest");
    else {
      this.appEventsService.publish("openSubcategoryPage", parent);
    }

  }
  ngOnInit() { }

}
