import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, ApplicationRef } from '@angular/core';
import { IonSlides, ModalController, NavController, ToastController, MenuController, Platform } from '@ionic/angular';
import { WooApiCallsService } from '../woo-api-calls.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-woocomerce',
  templateUrl: './woocomerce.page.html',
  styleUrls: ['./woocomerce.page.scss'],
})
export class WoocomercePage implements OnInit {

  public categoryItems: any;
  public productsCategory: any;
  ngOnInit() {

  }
  // @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  @ViewChild('slideIntro', { static: true }) slideIntro: IonSlides;
  @ViewChild('slideFeatured', { static: true }) slideFeatured: IonSlides;
  @ViewChild('slideCollection', { static: true }) slideCollection: IonSlides;
  @ViewChild('slideSale', { static: true }) slideSale: IonSlides;
  public slides = [];

  sliderConfig = {
    slidesPerView: 1.12,
    spaceBetween: 0,
  };
  constructor(private elementRef: ElementRef,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private toastController: ToastController,
    public menuCtrl: MenuController,
    public platform: Platform,
    private applicationRef: ApplicationRef,
    private woo: WooApiCallsService
    // private http: Http
  ) {

    // For All Categories
    this.woo.getWoo("products/categories", "?").then(data => {

      this.categoryItems = data;
      console.log("new data");
      console.log(this.categoryItems);
    });

    this.slides = [
      "assets/template-themes/shoe/images/banner/banner-1.png",
      "assets/template-themes/shoe/images/banner/banner-2.png",
      "assets/template-themes/shoe/images/banner/banner-3.png",
    ];
  }

  ionViewDidEnter() {
    this.slideIntro.startAutoplay();
  }

  ngOnIt() {

  }
  slideChanged() {
    this.slideFeatured.getActiveIndex().then(index => {
      if (index == 2) {
        this.slideFeatured.lockSwipeToNext(true);
      }
      else {
        this.slideFeatured.lockSwipeToNext(false);
      }
    });
    this.slideCollection.getActiveIndex().then(index => {
      if (index == 2) {
        this.slideCollection.lockSwipeToNext(true);
      }
      else {
        this.slideCollection.lockSwipeToNext(false);
      }
    });
    this.slideSale.getActiveIndex().then(index => {
      if (index == 2) {
        this.slideSale.lockSwipeToNext(true);
      }
      else {
        this.slideSale.lockSwipeToNext(false);
      }
    });
  }

  goToShop(id) {

    this.woo.getWoo("products?category=" + id, "&").then(data => {
      this.productsCategory = data;
      console.log("All Products Of Specific Category");
      console.log(this.productsCategory);
      this.woo.setDataProduct(this.productsCategory);
      this.navCtrl.navigateForward('woo-categories-detail');
    });
  }
}