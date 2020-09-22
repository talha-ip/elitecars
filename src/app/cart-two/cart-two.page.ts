import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart-two',
  templateUrl: './cart-two.page.html',
  styleUrls: ['./cart-two.page.scss'],
})
export class CartTwoPage implements OnInit {
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
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

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
}
