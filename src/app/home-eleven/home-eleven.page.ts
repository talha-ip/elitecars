import { Component, OnInit, ApplicationRef, ViewEncapsulation } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home-eleven',
  templateUrl: './home-eleven.page.html',
  styleUrls: ['./home-eleven.page.scss'],
})
export class HomeElevenPage {
  visiableExplore = true;
  visiableListView = false;
  constructor(public menuCtrl: MenuController, public nav: NavController,
    public alertController: AlertController,
    public applicationRef: ApplicationRef
  ) {
    this.applicationRef.tick();
  }
  segments: any = 'explore';//main segment
  newArrivalsegments: any = 'listView';//main segment
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  public featuredItems = [
    { name: "Shirts", img: "assets/template-themes/lesath/images/badge/2.jpg" },
    { name: "Winter Wear", img: "assets/template-themes/lesath/images/badge/3.jpg" },
    { name: "Shoes", img: "assets/template-themes/lesath/images/badge/4.jpg" },

  ];
  public allItems = [
    { name: "Tops", img: "assets/template-themes/lesath/images/all/1.jpg" },
    { name: "Bottoms", img: "assets/template-themes/lesath/images/all/2.jpg" },
    { name: "Winter Wear", img: "assets/template-themes/lesath/images/all/3.jpg" },
    { name: "Formal Wear", img: "assets/template-themes/lesath/images/all/4.jpg" },
    { name: "Accessories", img: "assets/template-themes/lesath/images/all/5.jpg" },
  ];
  public newArrival = [
    { name: "Net White Top", img: "assets/template-themes/lesath/images/new-arrival/1.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Printed Tshirt", img: "assets/template-themes/lesath/images/new-arrival/2.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Rose Petel Shirt", img: "assets/template-themes/lesath/images/new-arrival/3.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Flower Dress", img: "assets/template-themes/lesath/images/new-arrival/4.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Denium Jacket", img: "assets/template-themes/lesath/images/new-arrival/5.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Quilted Gilet Hoodie", img: "assets/template-themes/lesath/images/new-arrival/6.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: true, feature: false },
    { name: "Straight Long Coat", img: "assets/template-themes/lesath/images/new-arrival/7.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Mid waist Pent", img: "assets/template-themes/lesath/images/new-arrival/8.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: true, feature: false }
  ];
  public listItem = [
    { name: "Flower Dress", img: "assets/template-themes/lesath/images/listview/1.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: false, feature: true },
    { name: "Printed Tshirt", img: "assets/template-themes/lesath/images/listview/2.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: true, sale: false, feature: true },
    { name: "Net White Top", img: "assets/template-themes/lesath/images/listview/3.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: false, sale: true, feature: false },
    { name: "Printed Cotton Tshirt", img: "assets/template-themes/lesath/images/listview/4.jpg", price: "100", dPrice: "150", heartIcon: "false", badge: false, sale: true, feature: true },

  ];
  public latestItems = [
    { img: "assets/template-themes/lesath/images/explore/latest/1.jpg", badge: true, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/explore/latest/2.jpg", badge: false, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/explore/latest/3.jpg", badge: true, heartIcon: "false" }
  ];
  public featuredCollection = [
    { img: "assets/template-themes/lesath/images/featured-collection/1.jpg", badge: true, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/featured-collection/2.jpg", badge: true, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/featured-collection/3.jpg", badge: false, heartIcon: "false" },
  ];
  public arrivalItems = [
    { img: "assets/template-themes/lesath/images/explore/arival/1.jpg", badge: true, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/explore/arival/2.jpg", badge: false, heartIcon: "false" },
    { img: "assets/template-themes/lesath/images/explore/arival/3.jpg", badge: true, heartIcon: "false" },
  ]

  ionViewWillEnter() {
  }

  onIconClick(i) {
    if (i.heartIcon == false) {
      i.heartIcon = true;
    }
    else {
      i.heartIcon = false;

    }
  }
  goToFilter() {
    this.nav.navigateForward("filter");
  }
  async sortFun() {
    const alert = await this.alertController.create({
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Price: Low To High',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Price: High To Low',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Newest',
          value: 'value3'
        },
      ],
      buttons: [
        {
          text: 'Sort',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
  openViewTypes(i) {
    if (i == 1) {
      this.visiableExplore = true;
      this.visiableListView = false;
    }
    else {
      this.visiableExplore = false;
      this.visiableListView = true;
    }
  }
}
