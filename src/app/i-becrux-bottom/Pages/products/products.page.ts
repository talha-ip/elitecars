import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import { LoadingController, ToastController, ActionSheetController, NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';
import { HttpClient } from '@angular/common/http';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  url: string = 'https://teamway.om/elitecars/'
  items: any = []
  page: any = 1;

  is_loading = false;

  // @ViewChild(Content,{static:false}) content: Content;
  structure: any = { lower: 33, upper: 60 };
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  side = "right";
  @Input('type') type;//product data
  products: any = [1, 1, 1, 1];
  scrollSegments = "popular"//scrollable segment
  productView = 'grid';
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A'];
  constructor(public menuCtrl: MenuController,public appEventsService: AppEventsService,
    public shared: SharedDataService,
    public http: HttpClient,
    public config: ConfigService, public toastController: ToastController,
    public actionSheetController: ActionSheetController, public loadingController: LoadingController,
    public nav: NavController, private service: CustomThemeService) {
    this.loadPost(this.url, this.page, false);
    setTimeout(() => {
      this.products = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Toyota Corola 1.8L", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Ford Ranger", price: "14.64", dPrice: "31.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Honda Accord", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Honda Civic", price: "15.36", dPrice: "25.00", fav: false, res: true },
      ]
    }, 5000);
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
  }

  async loadPost(url: string, page, showLoading) {
    
    const loading = await this.loadingController.create({
      message: 'Loading Elite Cars'
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
      event.target.complete()
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
    // this.menuCtrl.enable(true, 'Menu2');
  }
  async resetFilters() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Newest',
      cssClass: 'action-sheet',
      buttons: [{
        text: 'A - Z',
        handler: () => {
        }
      }, {
        text: 'Z - A',
        handler: () => {
        }
      }, {
        cssClass: 'as-cancel-color',
        text: 'Cancel',
        role: 'destructive',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  async refresh() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
  goToCartPage() {
    this.nav.navigateForward("bb-cart");
  }
  openRightMenu() {
    this.menuCtrl.toggle('bbShop'); //Add this method to your button click function
  }

  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(false, 'Menu3');
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(false, 'bbShop');
  }
}