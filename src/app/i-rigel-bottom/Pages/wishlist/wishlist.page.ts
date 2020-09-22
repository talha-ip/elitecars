import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ModalController, ToastController, NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  public visEmptyWishlist = false;
  public productCount = 3;
  public deleteProductId = -1;
  public visiablePopup = false;
  public divBlur = "";
  public wishlistItems = [
    { image: "assets/template-themes/shoe/images/shoes/sale/1.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: true, new: false, sale: false, id: 0 },
    { image: "assets/template-themes/shoe/images/shoes/featured/3.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: false, new: true, sale: false, id: 1 },
    { image: "assets/template-themes/shoe/images/shoes/formal/1.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: false, new: true, sale: true, id: 2 },
  ]
  constructor(private elementRef: ElementRef,
    private appEventsService: AppEventsService,
    private navCtrl: NavController, ) {

    //for making background blur
    // this.events.subscribe('blurValue', (data) => {
    //   this.divBlur = data;
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    // });
    //value of blur from home modal
    let categoriesLoadedEvent = this.appEventsService.subscribe("blurValue");
    categoriesLoadedEvent.subscriptions.add(categoriesLoadedEvent.event.subscribe(data => {
      this.divBlur = data;
      this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    }));
    // const animation = document.getElementById('icon-animation');
    // animation.style.animationIterationCount = '20';
  }
  trashPopUp(item) {
    this.divBlur = "blur(6px)"
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(6px)';
    this.visiablePopup = true;//for blur effect
    this.deleteProductId = item.id;
  }
  dismiss() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.visiablePopup = false;//for disable blur effect
  }
  itemDelete() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.visiablePopup = false;//for disable blur effect
    if (this.deleteProductId == 0) {
      this.wishlistItems[0].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
      const tabBar = document.getElementById('wishlist-product');
      tabBar.style.animationName = 'fadeOut';
    }
    else if (this.deleteProductId == 1) {
      this.wishlistItems[1].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
    }
    else if (this.deleteProductId == 2) {
      this.wishlistItems[2].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
    }
    if (this.productCount == 0) {
      this.visEmptyWishlist = true;
    }
  }
  itemNotDelete() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    const tabBar = document.getElementById('shoe-tab-bar');
    tabBar.style.filter = 'blur(0px)';
    this.visiablePopup = false;//for disable blur effect
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
