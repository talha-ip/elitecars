import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { ThemeService } from '../services/theme.service';
import { ConfigService } from '../i-becrux-side/providers/config/config.service';
import { SharedDataService } from '../i-becrux-side/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.page.html',
  styleUrls: ['./home-one.page.scss'],
})
export class HomeOnePage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public itemColor = [];
  public iconColorVar = "";
  segments = "topSeller"//first segment by default 
  footerSegment = "CategoriesPage"//first segment by default
  data: any;//to check data load
  scrollTopButton = false;//for scroll down fab 
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.43,
    spaceBetween: 0
  }
  // For products
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  public recentViewedProducts: any = [
    { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true, res: true },
    { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
    { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true },
  ]
  constructor(public menuCtrl: MenuController, public toastController: ToastController,
    public nav: NavController, public config: ConfigService, public shared: SharedDataService, private service: CustomThemeService,
    public theme: ThemeService) {
    setTimeout(() => {
      this.tab1 = [
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "19.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "14.64", dPrice: "21.00", fav: false, res: true },
      ]
    }, 4000);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 4000);

  }

  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
}
