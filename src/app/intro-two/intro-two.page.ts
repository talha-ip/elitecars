import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.page.html',
  styleUrls: ['./intro-two.page.scss'],
})
export class IntroTwoPage implements OnInit {
  slidesHeader = 'Discover Latest Trends';
  slidesPara = 'Over Thousands of Latest Products Online.';
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/template-themes/lesath/images/intro/1.jpg" },
    { image: "assets/template-themes/lesath/images/intro/2.jpg" },
    { image: "assets/template-themes/lesath/images/intro/3.jpg" }
  ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    public theme: ThemeService) {

  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    this.autoSlides.startAutoplay();
  }
  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 0) {
        this.slidesHeader = 'Discover Latest Trends';
        this.slidesPara = 'Over Thousands of Latest Products Online.';

      }
      if (index == 1) {
        this.slidesHeader = 'Add To My Wishlist';
        this.slidesPara = 'Instantly Add Your favourite Items To Wishlist.';
      }
      if (index == 2) {
        this.visiable = true;
        this.slidesHeader = 'A Smart Shopping Experience';
        this.slidesPara = 'Browse Clothing Products Which Are Simply for You.';
      }
      else {
        this.visiable = false;
      }
    });
  }

  nextSlide() {
    this.autoSlides.slideNext();
  }
  ngOnInit() {
  }
}
