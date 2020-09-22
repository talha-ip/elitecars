import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, MenuController } from '@ionic/angular';
import { trigger, style, animate, transition } from '@angular/animations';//animation packages
import { NavController, IonContent } from '@ionic/angular';
import { ConfigService } from '../../../providers/config/config.service'
import { SharedDataService } from '../../../providers/shared-data/shared-data.service'
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { ThemeService } from 'src/app/services/theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

const themes = {
  black: {
    primary: '#0094FF',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
    ip_white : 'white',
  }
};


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  public itemColor = [];
  public iconColorVar = "";
  url: string = 'https://teamway.om/elitecars/'
  items: any = []
  page: any = 1;

  is_loading = false;
  
  scrollSegments = "popular"//scrollable segment
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
  public logo = 'assets/template-themes/becrux/images/logo/logo.png';
  public recentViewedProducts: any = [
    { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true, res: true },
    { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
    { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true },
  ]
  constructor(public menuCtrl: MenuController, public toastController: ToastController,
    public nav: NavController, public config: ConfigService, public shared: SharedDataService, public http: HttpClient,
    private appEventsService: AppEventsService, private service: CustomThemeService,
    public theme: ThemeService, public loadingController: LoadingController) {
    this.loadPost(this.url, this.page, false);
    setTimeout(() => {
      this.tab1 = [
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Suzuki Kasashi 2.5L", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Toyota Camry 2.5L", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Ford Ranger", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Honda Accord", price: "12.23", dPrice: "19.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Audi A8", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "GMC Yakon", price: "14.64", dPrice: "21.00", fav: false, res: true },
      ]
    }, 4000);
  }

  async loadPost(url: string, page, showLoading) {
    const loading = await this.loadingController.create({
      message: 'Loading Your posts'
    });
    if (showLoading) {
      await loading.present();
    }

    const route = this.url + 'wp-json/wp/v2/auto-listing'
    // set pagination
    if (!page) {
      page = '1';
    }

    return new Promise((resolve, reject) => {

      var concat;

      // check if url already has a query param
      if (url.indexOf('?') > 0) {
        concat = '&';
      } else {
        concat = '?';
      }

      this.http.get(route + concat + 'page=' + page)
        .subscribe(data => {

          if (showLoading) {
            loading.dismiss();
          }
          this.items = data;
          resolve(this.items);
          this.is_loading = true;
          console.log(this.items);
        },
          error => {
            if (showLoading) {
              loading.dismiss();
            }
            reject(error);
            //this.presentToast(error.error.message)
          })
    });
  }

  doRefresh(event) {
    this.loadPost(this.url, 1, false).then(() => {
      event.target.complete()
    }).catch(() => {
      event.target.complete()
    });
  }
    //for infinite scroll
    loadData(event) {
      this.page++;
  
      this.loadPost(this.url, this.page, false).then(() => {
        event.target.complete();
      }).catch(() => {
        event.target.complete();
        this.page--;
        this.presentToast("No More Cars");
      });
  
    }
    async presentToast(msg) {
  
      let toast = await this.toastController.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        cssClass: 'normal-toast'
      });
  
      toast.present();
    }

  ngOnInit() {
    alert ("hello from ammar");
  }

  async  enableLoadingController(i) {
    
  }


  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 4000);
    // For Local Storage And Color Scheme 
    this.theme.getTheme().then((result) => {
      let val = result;
      //this.theme.setTheme(themes['black'], 'black');
      // if (val == undefined) {
      //   this.theme.setTheme(themes['black'], 'black');
      // }
    });

    // const tabBar = document.getElementById('myTabBarBecrux');
    // tabBar.style.display = 'flex';

    // const tabBarBecrux = document.getElementById('myTabBarBecrux');
    // tabBarBecrux.style.display = 'flex';
    
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
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

  goToCartPage() {
    this.nav.navigateForward("bb-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bb-search");
  }
}