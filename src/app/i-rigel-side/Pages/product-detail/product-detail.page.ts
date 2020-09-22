import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';
//product detail modal
//import { ProductDetailModalPage } from '../product-detail-modal/product-detail-modal.page'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public visProductSuccessful = true;
  productQuantity = 2;
  productPrice = 90;
  //for blur effect
  public visiablePopup = false;
  public divBlur = ""
  // for heart
  public visHeart = true;
  public categoryHeader = "Product Name Here";
  public slides = [
    "assets/template-themes/shoe/images/product-detail/1.png",
    "assets/template-themes/shoe/images/product-detail/2.png",
    "assets/template-themes/shoe/images/product-detail/3.png",
  ];
  public productSlides = [
    { img: "assets/template-themes/shoe/images/shoes/featured/1.png", name: "Product Name Will Go Here!", price: "100", dPrice: "150", feature: true, new: false, sale: false, heartVis: false },
    { img: "assets/template-themes/shoe/images/shoes/sport/2.png", name: "Product Name Will Go Here!", price: "100", dPrice: "150", feature: false, new: true, sale: false, heartVis: false },
    { img: "assets/template-themes/shoe/images/shoes/sale/2.png", name: "Product Name Will Go Here!", price: "100", dPrice: "150", feature: false, new: false, sale: true, heartVis: false }
  ];
  public colorItems = [
    { color: "#1C197A", bgRadius: "8px solid #1C197A", text: "Blue", selectSize: false },
    { color: "#5A197A", bgRadius: "8px solid #5A197A", text: "Purple", selectSize: false },
    { color: "#913523", bgRadius: "8px solid #913523", text: "Brown", selectSize: false },
    { color: "#7A6719", bgRadius: "8px solid #7A6719", text: "Camel", selectSize: false },
  ];
  public sizeItems = [
    { name: "S", text: "Small", selectSize: false },
    { name: "M", text: "Medium", selectSize: false },
    { name: "L", text: "Large", selectSize: false },
    { name: "XL", text: "Xtra Large", selectSize: false },
  ];
  sliderConfig = {
    slidesPerView: 2.1,
    spaceBetween: 5,
    // pagination: {
    // el:'.swiper-pagination',
    // clickable: true,
    // }
  };
  constructor(
    public appEventsService: AppEventsService, private elementRef: ElementRef,
    private toastController: ToastController,
    private navCtrl: NavController, public menuCtrl: MenuController) {
    // this.events.subscribe('blurValue', (data) => {
    //   this.divBlur = data;
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    // });
    let blurValue = this.appEventsService.subscribe("blurValue");
    blurValue.subscriptions.add(blurValue.event.subscribe(data => {
      this.divBlur = data;
      this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    }));
  }
  ngOnInit() {
  }
  async share() {
    //toast controller
    const toast = await this.toastController.create({
      message: 'Product Share Clicked',
      duration: 2000
    });
    toast.present();
  }
  heart() {
    this.visHeart = !this.visHeart;
  }
  heartProduct(item) {
    if (item.heartVis == true) {
      item.heartVis = false;
    }
    else {
      item.heartVis = true;
    }
  }
  ionViewWillEnter() {
    //value of blue from home modal
    // this.events.subscribe('blurValue', (data) => {
    //   this.divBlur = data;
    // });
    let blurValue = this.appEventsService.subscribe("blurValue");
    blurValue.subscriptions.add(blurValue.event.subscribe(data => {
      this.divBlur = data;
    }));
    this.visiablePopup = false;//for blur effect
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    // For Menu Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4');
  }
  goToProductDetailModal() {
    this.divBlur = "blur(6px)"
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    this.visiablePopup = true;//for blur effect
  }
  dismiss() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    this.visiablePopup = false;//for disable blur effect
  }
  //for color 
  isColorCheck(item) {
    if (item.selectSize == true) {
      item.selectSize = true;
      console.log("yes");
    }
    else {
      item.selectSize = true;
      console.log("no");
    }
  }
  isSelectedColorCheck(item) {
    if (item.selectSize == true) {
      item.selectSize = false;
      console.log("yes");
    }
    else {
      item.selectSize = true;
      console.log("no");
    }
  }
  //for size
  isSizeCheck(item) {
    if (item.selectSize == true) {
      item.selectSize = true;
      console.log("yes");
    }
    else {
      item.selectSize = true;
      console.log("no");
    }
  }
  isSelectSizeCheck(item) {
    if (item.selectSize == true) {
      item.selectSize = false;
      console.log("yes");
    }
    else {
      item.selectSize = true;
      console.log("no");
    }
  }
  addBtn() {
    this.productQuantity = this.productQuantity + 1;
    this.productPrice = this.productPrice + 45;
  }
  subBtn() {
    this.productQuantity = this.productQuantity - 1;
    this.productPrice = this.productPrice - 45;
    if (this.productQuantity < 1) {
      this.productQuantity = 1;
      this.productPrice = 45;
    }
  }
  goToReview() {
    this.navCtrl.navigateForward("ss-review");
  }
  goToproductSucessfull() {
    this.visProductSuccessful = false;
  }
  goToCart() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    this.visProductSuccessful = true;
    this.navCtrl.navigateForward("ss-cart");
  }
  goToHome() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    this.visProductSuccessful = true;
    this.navCtrl.navigateForward("ss-home");
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
}