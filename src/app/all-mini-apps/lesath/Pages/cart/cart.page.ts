import { Component, OnInit, ViewEncapsulation, ViewChild, ApplicationRef } from '@angular/core';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { NavController, ModalController, ActionSheetController, IonContent, IonInfiniteScroll, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../../providers/loading/loading.service';
import { Storage } from '@ionic/storage';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  gridVisiable = false;
  wishLIstVisiable = true;
  qtyy = 0;
  visibleCheck = false;
  totalItems: any;
  checked = 0;
  //==========================
  total: any;
  subtotal: any;
  c = '';
  couponArray = [];
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
    public actionSheetCtrl: ActionSheetController,
  ) {
  }

  showColors(a) {
    return this.shared.checkAttributeIsColor(a);
  }
  goBack() {
    this.navCtrl.back();
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
      this.navCtrl.navigateForward("/mini-lesath-product-detail/" + p.id);
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
  }
  //============================================================================================  
  qunatityPlus = function (p) {
    if (p.stock_quantity == p.quantity)
      this.shared.showAlert("Product Quantity is Limited!");
    else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
      p.quantity++;
      p.subtotal = p.subtotal + parseFloat(p.price);
      p.total = p.total + parseFloat(p.price);
    }
  }
  //============================================================================================  
  //function decreasing the quantity
  qunatityMinus = function (p) {
    if (p.quantity != 1) {
      p.quantity--;
      p.subtotal = parseFloat(p.price) * p.quantity;
      p.total = parseFloat(p.price) * p.quantity;
    }
  }
  //============================================================================================  
  async proceedToCheckOut() {
    this.shared.onePageCheckOut();
  }
  //============================================================================================  
  openProductsPage() {
    this.navCtrl.navigateForward("mini-lesath-home");
  }
  //==========================================================================
  changingCart() {
    this.products = this.shared.cartProducts;
    this.storage.set('cartProducts', this.shared.cartProducts);
    this.shared.cartTotalItems();
    this.totalPrice();
  }
  ngOnInit() {
    this.changingCart();
  }
  //=================================
  RemoveItem() {
    let count = 0;
    let removeArray = [];
    //If even one item is checked but not all
    this.products.forEach((value1, index1) => {
      console.log(value1);
      if (value1.isChecked) {
        removeArray.push(value1.cart_id);
      }
    });
    removeArray.forEach((val, index1) => {
      this.removeCart(val);
    });
    if (count != 0) {
      this.shared.removeCart(this.products);
    }
  }
  edit() {
    if (!this.visibleCheck)
      this.visibleCheck = true;
    else
      this.visibleCheck = true;
  }
  cancel() {
    if (this.visibleCheck)
      this.visibleCheck = false;
    else
      this.visibleCheck = false;
  }
}