import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ThemeService } from '../services/theme.service';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';
const themes = {
  //black color o.k
  black: {
    primary: 'black',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
  }
};
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {
  slidesHeader = 'Discover Latest Trends';
  slidesPara = 'Over Thousands of Latest Products Online.';
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  sliderConfig = {
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
      //el: '.swiper-pagination',
      //clickable: true,
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
    public theme: ThemeService, public cTheme: CustomThemeService,
    public nav: NavController,
    public appEventsService: AppEventsService) {

    this.appEventsService.publish('l_bottom', false);

    // For Lesath Bottom Tabs Hide
    const tabBarLesath = document.getElementById('myTabBarLesath');
    tabBarLesath.style.display = 'none';
  }

  ionViewDidEnter() {
    this.splashScreen.hide();
    this.autoSlides.startAutoplay();
  }
  ionViewWillEnter() {
    this.theme.getTheme().then((result) => {
      let val = result;
      if (val == undefined) {
        this.theme.setTheme(themes['black'], 'black');
      }
    })
  }
  ionViewWillLeave() {
    //for tab bar
    const tabBar = document.getElementById('myTabBarLesath');
    tabBar.style.display = 'flex';
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

  goToHomeEcom() {
    this.navCtrl.navigateForward('/lb-home');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");  }
}
