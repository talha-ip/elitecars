// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Injectable, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ConfigService } from '../config/config.service';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { AppEventsService } from '../../../../services/app-events.service';


@Injectable()
export class SharedDataService {
  options : InAppBrowserOptions = {
    clearcache : 'yes',
    clearsessioncache : 'yes',
};
  lastOrderPlacedData: any;
  lastOrderPlacedId: any;
  missingTranslationValues = [];
  checkAttributeIsColor(a: string) {
    let val = a.toUpperCase();
    if (val == 'COLORS' ||
      val == 'COLOURS' ||
      val == 'COLOR' ||
      val.indexOf('COLOR') != -1 ||
      val.indexOf('COLOURS') != -1 ||
      val.indexOf('COLORS') != -1
    )
      return true;
    else return false;
  }

  public banners = [];
  public emptyArray = [1, 1, 1, 1];
  public tab1: any = this.emptyArray;
  public tab2: any = this.emptyArray;
  public tab3: any = this.emptyArray;

  public allCategories: any = this.emptyArray;
  public categories: any = this.emptyArray;
  public subCategories: any = this.emptyArray;
  public cartProducts = new Array();
  public couponArray = new Array();
  public cartquantity;
  public tempdata: { [k: string]: any } = {};
  public dir = "ltr";
  public cartTempProducts = [];
  public translationListArray = [];

  checkOutPageText = "Place Your Order";
  public attributes = [];
  public headerHexColor = "#000000";
  singlePostData: any;
  singleProductPageData = [];
  myOrderDetialPageData: { [k: string]: any; };
  storePageData = [];
  newestProductArray = this.emptyArray;
  saleProductArray = this.emptyArray;
  featuredProductArray = this.emptyArray;
  filtersTempArray = [];

  constructor(private http: HttpClient,
    public config: ConfigService,
    private storage: Storage,
    public loading: LoadingService,
    public appEventsService: AppEventsService,
    public platform: Platform,
    private spinnerDialog: SpinnerDialog,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private iab: InAppBrowser,
    private applicationRef: ApplicationRef,
    public splashScreen: SplashScreen ) {
    this.onStart();
    //update settings before calling

    //getting cart from local storage
    storage.get('cartProducts').then((val) => {
      if (val != null) this.cartProducts = val;
      this.cartTotalItems();
    });
    this.cartTotalItems();

    //---------------- end -----------------
    this.storage.get('missingTranslationValues').then((val) => {
      if (val != null) this.missingTranslationValues = val;
    });
  }
  public splashScreenHide = false;
  hideSplashScreen() {
    if (this.platform.is('cordova')) {
      if (!this.splashScreenHide) { this.splashScreen.hide(); this.splashScreenHide = true; }
    }
  }
  onStart() {
    //getting all allCategories
    this.getAllCategories(1);
  }

  public getMainCategoryFeaturedSaleNewestProductsCount = 0;
  getMainCategoryFeaturedSaleNewestProducts(val) {
    let catId = val;
    this.newestProductArray = this.emptyArray;
    this.saleProductArray = this.emptyArray;
    this.featuredProductArray = this.emptyArray;
    //getting tab 3
    this.config.getWoo("products?on_sale=true&status=publish&category=" + catId).then((data: any) => {
      this.saleProductArray = data
      this.applicationRef.tick();
    });
    this.config.getWoo("products?featured=true&status=publish&category=" + catId).then((data: any) => {
      this.featuredProductArray = data
      this.applicationRef.tick();
    });
    this.config.getWoo("products?status=publish&category=" + catId).then((data: any) => {
      this.newestProductArray = data
      this.applicationRef.tick();
    });
  }

  getAllCategories(page) {
    //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
    this.config.getWoo("products/categories?per_page=100&page=" + page).then((data: any) => {
      let dat = data
      if (this.allCategories[0] == 1) {
        this.allCategories = [];
        this.categories = [];
        this.subCategories = [];
      }
      for (let value of dat) {
        if (value.count != 0) {
          value.name = this.removeHtmlEntites(value.name);
          this.allCategories.push(value);
          if (value.parent == 0) {
            this.categories.push(value);
          }
          else
            this.subCategories.push(value);
        }
      }
      if (dat.length == 100) { this.getAllCategories(page + 1); }
      if (dat.length != 100) {
        this.appEventsService.publish("categoriesLoaded", null);
      }
      this.applicationRef.tick();
    });
  }

  removeHtmlEntites(value) {
    var multiple = {
      '&nbsp;': ' ',
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '"',
      '&apos;': '\'',
      '&cent;': '¢',
      '&pound;': '£',
      '&yen;': '¥',
      '&euro;': '€',
      '&copy;': '©',
      '&reg;': '®',
      '&#160;': ' ',
      '&#60;': '<',
      '&#62;': '>',
      '&#38;': '&',
      '&#34;': '"',
      '&#39;': '\'',
      '&#162;': '¢',
      '&#163;': '£',
      '&#165;': '¥',
      '&#8364;': '€',
      '&#169;': '©',
      '&#174;': '®',

    };
    for (var char in multiple) {
      var before = char;
      var after = multiple[char];
      var pattern = new RegExp(before, 'g');
      value = value.replace(pattern, after);
    }
    return value;
  }

  //adding into cart array products
  addToCart(product, variation, quantity: any, metaData: any) {

    if (!this.checkCart(product, quantity)) return 0;
    if (this.alreadyInCart(product, variation, quantity)) return 0;

    var p: { [k: string]: any } = {};
    p.product_id = product.id;
    p.name = product.name;
    p.isChecked = false;
    if (quantity == null || quantity == "null") p.quantity = 1;
    else { p.quantity = quantity; console.log(quantity); console.log("quantity not null"); };
    var seconds = new Date().getTime();
    p.cart_id = product.id + seconds;
    if (product.images.length != 0)
      p.image = product.images[0].src;
    else p.image = "assets/woocommerce-placeholder.png"
    //console.log(p.image)
    p.stock_quantity = product.stock_quantity;
    p.tax_class = product.tax_class;
    p.tax_status = product.tax_status;
    p.price = product.price;
    p.price_html = product.price_html;
    p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
    p.total = parseFloat(product.price) * parseInt(p.quantity);
    p.on_sale = product.on_sale;
    p.categories = product.categories;

    if (metaData != null) p.meta_data = metaData;
    p.sold_individually = product.sold_individually;

    if (product.type == 'variable' && variation != null) {
      p.variation_id = variation.id;
      p.price = parseFloat(variation.price);
      p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
      p.total = parseFloat(variation.price) * parseInt(p.quantity);
      p.name = variation.name;
      p.stock_quantity = variation.stock_quantity;
      p.tax_status = variation.tax_status;
      if (variation.image) p.image = variation.image.src;
      else p.image = variation.images[0].src;

    }
    console.log(p);
    this.cartProducts.push(p);
    this.storage.set('cartProducts', this.cartProducts);

    this.cartTotalItems();
    this.applicationRef.tick();
    // console.log(this.cartProducts);
    //console.log(this.cartProducts);
    this.toast("Added To Cart!");
  }
  checkCart(p, quantity) {
    let name = null;
    let onlyOneAllowed = true;
    let quantityCheck = true;
    //check for only one item is allowed
    for (let value of this.cartProducts) {
      if (value.sold_individually == true && p.id == value.product_id) { onlyOneAllowed = false; name = value.name; }
    }
    if (onlyOneAllowed == false) this.showAlertWithTitle(name, "Only One Item Allowed");

    //check for product quantity
    if (quantity == null) quantity = 1;

    if (p.stock_quantity == null || p.stock_quantity > quantity) quantityCheck = true;
    else if (p.stock_quantity < quantity) {
      quantityCheck = false;
      this.showAlert("Product Quantity is Limited!");
    }

    if (onlyOneAllowed && quantityCheck) return true;
    else return false;
  }
  alreadyInCart(p, vId, quantity) {

    let count = 0;
    for (let value of this.cartProducts) {
      //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
      if (p.type != 'variable' && value.product_id == p.id) { count++; value.quantity = parseInt(value.quantity) + parseInt(quantity); }
      else if (value.product_id == p.id && value.variation_id == vId.id) { count++; value.quantity = parseInt(value.quantity) + parseInt(quantity); }
    }
    this.storage.set('cartProducts', this.cartProducts);
    this.cartTotalItems();
    if (count != 0) return true;
    else return false;
  }
  //removing from recent array products
  removeCart(p) {
    this.cartProducts = p;
    this.storage.set('cartProducts', this.cartProducts);
    this.cartTotalItems();
  }
  emptyCart() {
    this.cartProducts = [];
    this.storage.set('cartProducts', this.cartProducts);
    this.cartTotalItems();
  }

  //Function calcualte the total items of cart
  cartTotalItems = function () {
    this.appEventsService.publish('cartChange', null);
    let total = 0;
    for (let value of this.cartProducts) {
      total += parseInt(value.quantity);
    }
    this.cartquantity = total;
    // this.applicationRef.tick();
    return total;
  };
  productsTotal() {
    let total = 0;
    for (let value of this.cartProducts) {
      total = total + parseFloat(value.total);
    }
    return total;
  }
  showAd() {
    if (this.platform.is('cordova')) {
    }
  }
  // <!-- 2.0 updates -->
  onePageCheckOut() {
    var data = {
      products: this.getProducts()
    };
    console.log(data);
    this.openCheckoutWebview(data);
  }

  //=================================================================================================================================
  // <!-- 2.0 updates -->
  getProducts() {
    var data = [];
    for (let v of this.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }

  toast(msg) {
    this.translateString(msg).then(async (res: string) => {
      const toast = await this.toastCtrl.create({
        message: res,
        duration: 2500,
        position: 'bottom'
      });
      toast.present();
    });
  }
  //=================================================================================================================================
  openCheckoutWebview(data) {
    //const browser = this.iab.create(this.config.url + "/checkout/?add-to-cart=" + data.products[0].product_id, '_blank');

    var iab = this.iab;
    // iab.open
    // browser.on('loadstop').subscribe(event => {
    //var iab = cordova.InAppBrowser;

    // iab.open('http://whitelisted-url.com');                  // loads in the Cordova WebView
    // iab.open('http://whitelisted-url.com', '_self');
    // });
    // browser.close();
    // data.products.forEach(element => {
    //   iab.create(this.config.url + "/checkout/?add-to-cart=" + element.product_id, '_blank', this.options);
    //   console.log();
    // });
    const browser = this.iab.create(this.config.url + "/checkout/?add-to-cart=" + data.products[0].product_id, '_blank', this.options);
  }
  //categories page

  getCategoriesPageItems(parent) {
    let c = [];
    if (parent == undefined)
      c = this.categories;
    else {
      for (let v of this.allCategories) {
        if (v.parent == parent) {
          c.push(v);
        }
      }
    }
    //console.log(c);
    return c;
  }
  // translation services
  translateString(value) {
    return new Promise(resolve => {
      let v = this.translationListArray[value];
      if (v == undefined) {
        this.updateMissingTranslationValues(value);
        v = value;
      }
      resolve(v);
    });
  }
  translateArray(value) {
    return new Promise(resolve => {
      let tempArray = [];
      value.forEach(element => {
        if (this.translationListArray[element] != undefined) {
          tempArray[element] = this.translationListArray[element];
        }
        else {
          tempArray[element] = element;
          this.updateMissingTranslationValues(value);
        }
      });
      resolve(tempArray);
    });

  }

  updateMissingTranslationValues(value) {
  }
  //=================================================

  showAlert(text) {
    this.translateArray([text, "ok", "Alert"]).then(async (res) => {
      console.log(res);
      const alert = await this.alertCtrl.create({
        header: res["Alert"],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }

  showAlertWithTitle(text, title) {
    this.translateArray([text, "ok", title]).then(async (res) => {
      let alert = await this.alertCtrl.create({
        header: res[title],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }

}
