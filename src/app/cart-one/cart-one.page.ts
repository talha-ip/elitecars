import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../i-becrux-side/providers/shared-data/shared-data.service';
import { ConfigService } from '../i-becrux-side/providers/config/config.service';
import { MenuController, NavController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart-one',
  templateUrl: './cart-one.page.html',
  styleUrls: ['./cart-one.page.scss'],
})
export class CartOnePage implements OnInit {
  value = 0;
  orders = [{ subTotal: "100.00", discount: "0.00", total: "100.00" }]
  public products = [
    { image: "assets/template-themes/becrux/category-images/top.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
  ];
  constructor(public shared: SharedDataService,
    public config: ConfigService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public alertController: AlertController,
    public modalCtrl: ModalController) {
  }
  ngOnInit() {
  }
  addQuantity() {
    this.value++;
  }
  minusQuantity() {
    if (this.value > 0) {
      this.value--;
    }
  }
  async isCoupon() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Invalide Coupon Code!',
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
