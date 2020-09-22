import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { Injectable, ApplicationRef } from '@angular/core';
import { AppEventsService } from 'src/app/services/app-events.service';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
 
  visiableExplore = true;
  visiableListView = false;
  constructor(public menuCtrl: MenuController, public nav: NavController,
    public alertController: AlertController, public appEventsService: AppEventsService,
    public applicationRef: ApplicationRef
  ) {
    this.applicationRef.tick();
  }
  newArrivalsegments: any = 'listView';//main segment
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };

  public newArrival = [
    { name: "Net White Top", img: "assets/template-themes/lesath/images/new-arrival/1.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Printed Tshirt", img: "assets/template-themes/lesath/images/new-arrival/2.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Rose Petel Shirt", img: "assets/template-themes/lesath/images/new-arrival/3.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Flower Dress", img: "assets/template-themes/lesath/images/new-arrival/4.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: true, feature: true },
    { name: "Denium Jacket", img: "assets/template-themes/lesath/images/new-arrival/5.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Quilted Gilet Hoodie", img: "assets/template-themes/lesath/images/new-arrival/6.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: true, feature: false },
    { name: "Straight Long Coat", img: "assets/template-themes/lesath/images/new-arrival/7.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: false, sale: false, feature: true },
    { name: "Mid waist Pent", img: "assets/template-themes/lesath/images/new-arrival/8.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: true, feature: false }
  ];
  public listItem = [
    { name: "Flower Dress", img: "assets/template-themes/lesath/images/listview/1.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: false, feature: true },
    { name: "Printed Tshirt", img: "assets/template-themes/lesath/images/listview/2.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: true, sale: false, feature: true },
    { name: "Net White Top", img: "assets/template-themes/lesath/images/listview/3.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: false, sale: true, feature: false },
    { name: "Printed Cotton Tshirt", img: "assets/template-themes/lesath/images/listview/4.jpg", price: "100", dPrice:"150", heartIcon: "false", badge: false, sale: true, feature: true },

  ];

  ngOnInit() {

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
  goToProductDetail() {
    this.nav.navigateForward("lb-product-detail");
  }

  goToSearch() {
    this.nav.navigateForward('lb-search');
  }

  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
