import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, MenuController, NavController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-intro-one',
  templateUrl: './intro-one.page.html',
  styleUrls: ['./intro-one.page.scss'],
})
export class IntroOnePage implements OnInit {
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/template-themes/becrux/images/starter/home2.png", title: "Home Pages", icon: "home", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/shop2.png", title: "Shop Pages", icon: "cash", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/category2.png", title: "Category Pages", icon: "apps", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/order2.png", title: "Order Page", icon: "browsers", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." }  
  ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController, public theme: ThemeService, public splashscreen: SplashScreen) {
  }
  ionViewDidEnter() {
    this.splashscreen.hide();
    this.autoSlides.startAutoplay();
  }

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
  ngOnInit() {
  }
  goToHomeEcom(){
    this.navCtrl.navigateForward("multipurpose-screens-details");
  }

}
