import { Component, OnInit, ApplicationRef } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-wishlist-two',
  templateUrl: './wishlist-two.page.html',
  styleUrls: ['./wishlist-two.page.scss'],
})
export class WishlistTwoPage implements OnInit {
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
  constructor(public menuCtrl: MenuController, public nav: NavController, public applicationRef: ApplicationRef) {
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
}