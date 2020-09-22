import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonInfiniteScroll } from '@ionic/angular';
import { ConfigService } from '../../../providers/config/config.service';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  segments = "topSeller"//first segment by default 
  scrollTopButton = false;//for scroll down fab 
  //for product slider after banner
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }

  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  page = 1;

  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
  ) {

  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
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
  openProducts(value) {
    this.nav.navigateForward("/products/0/0/" + value);
  }
  openCategoryPage() {
    // this.events.publish("openCategoryPage");
  }
  getProducts() {
    let query = 'products?' + 'page=' + this.page;
    query = query + "&status=publish"
    if (this.page == 1) { this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; }
    this.config.getWoo(query).then((data: any) => {
      let dat = data
      this.infinite.complete();
      if (this.page == 1) {
        this.products = new Array;
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.products.push(value);
        }
      }
      if (dat.length < 10) { this.infinite.disabled = true; }
    });
  }
  ngOnInit() {
    this.getProducts();
  }
}