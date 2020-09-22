import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-thankyou-two',
  templateUrl: './thankyou-two.page.html',
  styleUrls: ['./thankyou-two.page.scss'],
})
export class ThankyouTwoPage implements OnInit {
  items = [
    { image: 'assets/template-themes/lesath/images/cart/1.png', title: 'Printed T-Shirt', price: '$ 100', size: 'L', color: 'grey', qty: '1' },
    { image: 'assets/template-themes/lesath/images/cart/2.png', title: 'Rose PatelShirt', price: '$ 130', size: 'L', color: 'red', qty: '2' }
  ]
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }

}
