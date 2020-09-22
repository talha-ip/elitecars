import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModalController, NavController } from '@ionic/angular';
import { ConfigService } from '../../../providers/config/config.service';

import { LoadingService } from '../../../providers/loading/loading.service';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-product',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('data') p;//product data
  @Input('type') type;
  public isLiked = 0;
  public wishArray = [];
  constructor(public config: ConfigService,
    public shared: SharedDataService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage,
    public loading: LoadingService,
    
  ) {
  }
  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.id == this.p.id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }
  pDiscount() {
    var rtn = "";
    var p1 = parseInt(this.p.regular_price);
    var p2 = parseInt(this.p.sale_price);
    if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) { rtn = ""; }
    var result = Math.abs((p1 - p2) / p1 * 100);
    result = parseInt(result.toString());
    if (result == 0) { rtn = "" }
    rtn = result + '%';
    return rtn;
  }

  showProductDetail() {
    this.shared.singleProductPageData.push(this.p);
    this.navCtrl.navigateForward("mini-becrux-nine-product-detail/" + this.p.id);
  }

  checkProductNew() {
  }

  addToCart() {
    this.shared.addToCart(this.p, null, null, null);
    //this.navCtrl.push(CartPage); 
  }

  isInCart() {
    var found = false;

    for (let value of this.shared.cartProducts) {
      if (value.product_id == this.p.id) { found = true; }
    }

    if (found == true) return true;
    else return false;
  }

  ngOnChanges() {

  }

  ngOnInit() {

  }
}
