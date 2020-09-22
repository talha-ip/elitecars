import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-detail-two',
  templateUrl: './order-detail-two.page.html',
  styleUrls: ['./order-detail-two.page.scss'],
})
export class OrderDetailTwoPage implements OnInit {
  items = [
    { image: 'assets/template-themes/lesath/images/cart/1.png', title: 'Rose Petel Shirt', price: '$ 130', size: 'L', color: 'danger', qty: '1' },
    { image: 'assets/template-themes/lesath/images/cart/2.jpg', title: 'Printed Casual Shirt', price: '$ 100', size: 'L', color: 'danger', qty: '2' }
  ];
  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  
  ngOnInit() {
  }

}
