import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { CustomThemeService } from 'src/app/services/custom-theme.service';

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.page.html',
  styleUrls: ['./wordpress-posts.page.scss'],
})
export class WordpressPostsPage implements OnInit {
  // Place your Wordpress site url here
  url: string = 'http://tcshop.androidecommerce.com/'
  items: any = []
  page: any = 1;

  media: any = []; // For Image

  constructor(
    public http: HTTP, public nav: NavController, public service: CustomThemeService,
    public toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {
    this.loadPost(this.url, this.page, true);
  }

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
    this.nav.navigateForward('wordpress-posts-details');
  }
}