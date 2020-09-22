import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  gridVisiable = false;
  wishLIstVisiable = true;
  qtyy = 0;
  visibleCheck = false;
  totalItems: any;
  checked = 0;
  new_list: any = [];
  cartItems = [
    { p_id: '0', isChecked: false, image: 'assets/template-themes/lesath/images/cart/2.jpg', title: 'Printed Casual Shirt', price: '$ 100', size: 'L', color: 'danger', qty: '1' },
    { p_id: '1', isChecked: false, image: 'assets/template-themes/lesath/images/cart/1.png', title: 'Rose Patel Shirt', price: '$ 130', size: 'L', color: 'danger', qty: '2' }
  ];
  constructor(public menuCtrl: MenuController,
     public appEventsService: AppEventsService, public nav: NavController) { }

  ngOnInit() {
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
      this.cartItems.forEach((value2, index2) => {
        if (value2.p_id == value1.p_id) {
          this.cartItems.splice(index2, 1);
        }
      });
    });

    if (this.cartItems.length == 0) {
      this.gridVisiable = true;
    }
    this.new_list = [];
  }
  dismiss() {
    this.nav.navigateForward('lb-home');
  }

  edit() {
    this.visibleCheck = true;
  }
  addQuantity() {
    this.qtyy++;
  }
  minusQuantity() {
    if (this.qtyy > 0) {
      this.qtyy--;
    }
  }

  goToShipping() {
    this.nav.navigateForward('lb-shipping');
  }

  setVisibleCancel() {
    this.visibleCheck = false;
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}
