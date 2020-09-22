import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../../providers/loading/loading.service';
import { CouponService } from '../../../providers/coupon/coupon.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  total: any;
  subtotal: any;
  c = '';
  products = [];
  loadingServerData = true;
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public http: HttpClient,
    public loading: LoadingService,
    private storage: Storage,
    public modalCtrl: ModalController,
    private applicationRef: ApplicationRef,
    public couponProvider: CouponService,
    public actionSheetCtrl: ActionSheetController,
  ) {
  }
  //============================================================================================  
  totalPrice() {
    var price = 0;
    var subPrice = 0;
    for (let value of this.products) {
      subPrice = subPrice + value.subtotal
      price = price + value.total;
    }
    this.subtotal = subPrice;
    this.total = price;
    // console.log(price);
  };
  //============================================================================================  
  getSingleProductDetail(id) {
    this.loading.show();
    this.config.getWoo("products/" + id).then((data: any) => {
      this.loading.hide();
      let p = data[0];
      this.shared.singleProductPageData.push(p);
      this.navCtrl.navigateForward("mini-becrux-four-product-detail/" + p.id);
    }, err => {
      this.loading.hide();
      console.log(err);
    });
  }
  //============================================================================================  
  removeCart(id) {

    this.products.forEach((value, index) => {

      if (value.cart_id == id) {
        this.products.splice(index, 1);
        console.log("removing" + id);
      }
    });
    this.shared.removeCart(this.products);
    this.updateCart();
  }
  //============================================================================================  
  qunatityPlus = function (p) {
    if (p.stock_quantity == p.quantity)
      this.shared.showAlert("Product Quantity is Limited!");
    else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
      p.quantity++;
      p.subtotal = p.subtotal + parseFloat(p.price);
      p.total = p.total + parseFloat(p.price);
      this.updateCart();
    }

  }
  //============================================================================================  
  //function decreasing the quantity
  qunatityMinus = function (p) {
    if (p.quantity != 1) {
      p.quantity--;
      p.subtotal = parseFloat(p.price) * p.quantity;
      p.total = parseFloat(p.price) * p.quantity;
      this.updateCart();
    }

  }

  //============================================================================================  
  async proceedToCheckOut() {
    this.shared.onePageCheckOut();
  }
  //============================================================================================  
  openProductsPage() {
  
  }
  //============================================================================================  
  ionViewWillEnter() {
    //if (this.config.admob == 1) this.shared.showAd();
    this.updateCart();
  }
  //============================================================================================  
  updateCart() {
    this.changingCart()
  }
  //==========================================================================
  changingCart() {
    this.products = this.shared.cartProducts;
    this.storage.set('cartProducts', this.shared.cartProducts);
    this.shared.cartTotalItems();
    this.totalPrice();
    this.applicationRef.tick();
  }
  ngOnInit() {
  }
}