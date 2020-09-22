import { Component, OnInit, ApplicationRef, ViewEncapsulation } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  qtyy = 0;
  small = false;
  medium = false;
  large = false;
  extraLarge = false;
  doubleExtraLarge = false;
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }

  };
  public slides = [
    { image: "assets/template-themes/lesath/images/explore/latest/1.jpg" },
    { image: "assets/template-themes/lesath/images/product-detail/2.png" },
  ];
  public newArrival = [
    { name: "Printed Shirt", img: "assets/template-themes/lesath/images/product-detail/p1.jpg", price: "150", heartIcon: "false", badge: false },
    { name: "Sailor Pant Denim", img: "assets/template-themes/lesath/images/product-detail/p2.png", price: "150", heartIcon: "false", badge: false },
    { name: "Leather Pent", img: "assets/template-themes/lesath/images/product-detail/p3.jpg", price: "150", heartIcon: "false", badge: false },
  ];
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController, public applicationRef: ApplicationRef) {
    this.applicationRef.tick();
  }

  ngOnInit() {
  }
  s(i) {
    if (i == 0) {
      this.small = true;
    }
    else {
      this.small = false;
    }
  }
  m(i) {
    if (i == 0) {
      this.medium = true;
    }
    else {
      this.medium = false;
    }
  }
  l(i) {
    if (i == 0) {
      this.large = true;
    }
    else {
      this.large = false;
    }
  }
  xl(i) {
    if (i == 0) {
      this.extraLarge = true;
    }
    else {
      this.extraLarge = false;
    }
  }
  xxl(i) {
    if (i == 0) {
      this.doubleExtraLarge = true;
    }
    else {
      this.doubleExtraLarge = false;
    }
  }
  onIconClick(i) {
    if (i.heartIcon == false) {
      i.heartIcon = true;
    }
    else {
      i.heartIcon = false;
    }
  }

  addQuantity() {
    this.qtyy++;
  }
  minusQuantity() {
    if (this.qtyy > 0) {
      this.qtyy--;
    }
  }

  goToImage() {
    this.nav.navigateForward("lb-image");
  }
  goToProductDetail() {
    this.nav.navigateForward("lb-product-detail");
  }
  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
