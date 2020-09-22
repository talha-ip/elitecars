import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { CustomThemeService } from '../../../services/custom-theme.service';

@Component({
  selector: 'app-mini-news-three',
  templateUrl: './mini-news-three.page.html',
  styleUrls: ['./mini-news-three.page.scss'],
})
export class MiniNewsThreePage implements OnInit {
  // Place your Wordpress site url here
  url: string = 'http://tcshop.androidecommerce.com/';
  items: any = [];
  page: any = 1;
  sliderConfiglatestItems = {
    slidesPerView: 1.5,
    spaceBetween: 12,
  };
  sliderConfigTrendingItems = {
    slidesPerView: 2.5,
    spaceBetween: 12,
  }
  constructor(
    public http: HTTP, public nav: NavController,
    public toastCtrl: ToastController,
    public loadingController: LoadingController,
    public service: CustomThemeService
  ) {
    this.loadPost(this.url, this.page, true);
  }
  //for wordpress load post
  async loadPost(url: string, page, showLoading) {
    const loading = await this.loadingController.create({
      message: 'Loading Your posts'
    });
    if (showLoading) {
      await loading.present();
    }
    const route = this.url + 'wp-json/wp/v2/posts?_embed'
    return new Promise((resolve, reject) => {
      this.http.get(route, {}, {})
        .then(data => {
          let d = JSON.parse(data.data);
          console.log("Main DATA PARSED ");
          console.log(d);
          this.items = d;
          if (showLoading) {
            loading.dismiss();
          }
        },
          error => {
            console.log("Error");
            console.log(error);
            if (showLoading) {
              loading.dismiss();
            }
            reject(error);
            this.presentToast(error.error.message)
          })
    });
  }
  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      cssClass: 'normal-toast'
    });
    toast.present();
  }
  ngOnInit() {
  }
  goToPostDetails(item) {
    this.service.setData(item);
    this.nav.navigateForward('mini-news-detail-three');
  }
}
