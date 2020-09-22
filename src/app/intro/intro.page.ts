import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;

  public slides = [
    { image: "assets/images/intro/home-page-animation.gif", title: "Home Page", icon: "home", text: "Home screen contain all themes at top. You can select component screen, UI screens and many more from home page. " },
    { image: "assets/images/intro/components-Screens.gif", title: "Component Details Page", icon: "apps", text: "Cmponent details contain 90+ screens of ionic components. You can use them instead of creating them from scratch" },
    { image: "assets/images/intro/Multipurpose-Screens.gif", title: "Multipurpose Screens Page", icon: "browsers", text: "UI Multipurpose screens page contain 50+ screens." },
    { image: "assets/images/intro/UI-templates.gif", title: "UI Templates Page", icon: "card", text: "UI Themes contain 6 complete templates of Ecommerce." },
    { image: "assets/images/intro/code-script.gif", title: "Plugins/Code Scripts Page", icon: "code", text: "Plugins/Code Scripts contains integrations with Social Logins, YouTube, Map, Push Notifications etc." },
  ];
  constructor(private splashScreen: SplashScreen) {
  }
  nextSlide() {
    this.autoSlides.slideNext();
  }
  ionViewDidEnter() {
    this.splashScreen.hide();
    this.autoSlides.startAutoplay();
  }
  ngOnInit() { }
  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 4) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }
}