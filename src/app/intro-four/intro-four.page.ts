import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from '../services/app-events.service'
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-intro-four',
  templateUrl: './intro-four.page.html',
  styleUrls: ['./intro-four.page.scss'],
})
export class IntroFourPage implements OnInit {
  @ViewChild(IonSlides, { read: true, static: false }) introSlides: IonSlides;
  public visBtn = true;
  public sliderItems = [
    { img: "assets/template-themes/shoe/images/news/1.jpg", title: "Sign Up For Luxury", desc: "From Casual to Dress We Have The Size and Width You Need", curve: "assets/template-themes/shoe/images/other/curve-one.png" },
    { img: "assets/template-themes/shoe/images/category/12.jpg", title: "Quality Comfort Shoes", desc: "Shop The Latest Dress Shoes On The World Largest Shoe Store", curve: "assets/template-themes/shoe/images/other/curve-two.png" },
    { img: "assets/template-themes/shoe/images/category/11.jpg", title: "Elegant Men Formal Shoes", desc: "Free Shipping and Returns and More Offers Available at Our Online Store", curve: "assets/template-themes/shoe/images/other/curve-three.png" },
  ];
  constructor( public menuCtrl: MenuController,
     public nav: NavController,
     public appEventsService: AppEventsService) {
    // service.setvisiableTabBar(true);
    this.appEventsService.publish('tabActive', false);
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.introSlides.startAutoplay();
  }
  slideChanged() {
    this.introSlides.startAutoplay();
    this.introSlides.getActiveIndex().then(index => {
      if (index == 2) {
        this.visBtn = false;
      }
      else {
        this.visBtn = true;
      }
    });
  }
  nextSlide() {
    this.introSlides.slideNext();
  }
}
