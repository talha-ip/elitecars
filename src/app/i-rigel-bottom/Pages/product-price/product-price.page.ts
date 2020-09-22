import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-price',
  templateUrl: './product-price.page.html',
  styleUrls: ['./product-price.page.scss'],
  styles: [
    '.range-pin{ background: red  }'
  ]
})
export class ProductPricePage implements OnInit {
  isBtn = true;
  structure: any = { lower: 50, upper: 150 };
  constructor(public modalCtrl: ModalController,
    public appEventsService: AppEventsService) { }

  ngOnInit() {
  }
  reset() {
    this.structure.lower = 50;
    this.structure.upper = 150;
  }
  range() {
    if (this.structure.lower != 50 || this.structure.upper != 150)
      this.isBtn = false;
  }
  dismiss() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.modalCtrl.dismiss();
  }
}
