import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  contact = {
    name: '',
    email: '',
    message: ''
  };
  url: string = 'https://teamway.om/elitecars/'
  contactData: any = []
  is_loading = false;
  public logo = 'assets/template-themes/becrux/images/logo/logo.png';
  errorMessage = '';
  constructor(private service: CustomThemeService,public menuCtrl: MenuController,
    public appEventsService: AppEventsService, public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public nav: NavController, public loadingController: LoadingController, public http: HttpClient) 
  { 
    this.loadContactDetails(this.url, false);
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

  async loadContactDetails(url: string, showLoading) {
    const loading = await this.loadingController.create({
      message: 'Loading Contact screen'
    });
    if (showLoading) {
      await loading.present();
    }

    const route = this.url + 'wp-json/elitecars_options/v1/elite_settings'
    

    return new Promise((resolve, reject) => {

      var concat;

      // check if url already has a query param
      if (url.indexOf('?') > 0) {
        concat = '&';
      } else {
        concat = '?';
      }

      this.http.get(route)
        .subscribe(data => {

          if (showLoading) {
            loading.dismiss();
          }
          this.contactData = data;
          resolve(this.contactData);
          this.is_loading = true;
          console.log(this.contactData);
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


  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("bb-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bb-search");
  }

  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
    }
}
