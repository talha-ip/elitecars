import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Injectable, ApplicationRef } from '@angular/core';
import { AppEventsService } from 'src/app/services/app-events.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  gridVisiable = false;
  wishLIstVisiable = true;
  rowVisiable = true;
  totalItems: any;
  checked = 0;
  new_list: any = [];
  public wishlist = [
    { p_id: '0', isChecked: false, name: "Flower Dress", img: "assets/template-themes/lesath/images/wishlist/1.jpg", price: "100", dPrice: "150", badge: true, sale: true, feature: true },
    { p_id: '1', isChecked: false, name: "Straight Long Coat", img: "assets/template-themes/lesath/images/wishlist/2.jpg", price: "100", dPrice: "150", badge: false, sale: false, feature: true },
    { p_id: '2', isChecked: false, name: "Quilted Gilet Coat", img: "assets/template-themes/lesath/images/wishlist/3.jpg", price: "100", dPrice: "150", badge: true, sale: true, feature: false },
  ];
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController, public applicationRef: ApplicationRef) {
    this.applicationRef.tick();
    this.totalItems = this.wishlist.length;

  }
  checkEvent(item) {
    if (item.isChecked == true) {
      this.checked++;
      this.new_list.push(item);
    }
    else {
      this.checked--;
      this.new_list.forEach((value1, index1) => {
        if (value1.p_id == item.p_id) {
          this.new_list.splice(index1, 1);
        }
      });
    }

  }

  RemoveItem() {
    //If even one item is checked but not all
    this.new_list.forEach((value1, index1) => {
      this.wishlist.forEach((value2, index2) => {
        if (value2.p_id == value1.p_id) {
          this.wishlist.splice(index2, 1);
        }
      });
    });

    if (this.wishlist.length == 0) {
      this.gridVisiable = true;
    }
    this.new_list = [];
  }
  ngOnInit() {
  }
  goToCart() {
    this.nav.navigateForward('lb-cart');
  }

  goToHome() {
    this.nav.navigateForward("lb-home");
  }
  CheckOpen(val) {
    if (val == 'edit') {
      this.wishLIstVisiable = false;
      this.rowVisiable = false;
    }
    else if (val == 'delete') {
      this.wishLIstVisiable = true;
      this.rowVisiable = true;
    }
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}
