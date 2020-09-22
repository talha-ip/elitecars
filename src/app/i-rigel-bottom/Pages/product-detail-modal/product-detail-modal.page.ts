import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.page.html',
  styleUrls: ['./product-detail-modal.page.scss'],
})
export class ProductDetailModalPage implements OnInit {

  constructor(public modalCtrl: ModalController,
    public appEventsService: AppEventsService) { }

  ngOnInit() {
  }
  dismiss() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.modalCtrl.dismiss();
  }
}
