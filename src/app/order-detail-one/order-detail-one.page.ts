import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail-one',
  templateUrl: './order-detail-one.page.html',
  styleUrls: ['./order-detail-one.page.scss'],
})
export class OrderDetailOnePage implements OnInit {
  order = [
    { name: "Straight Long Coat", price: "USD 100.00", quantity: "1", total: "USD 100.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" },
  ];
  paymentMethods = ["Direct bank transfer", "Cash on delivery"];
  orders = [{ shipping_tax: "USD 0.00", shipping_total: "USD 0.00", discount_total: "USD 0.00", total: "USD 188.00" }]
  product = [{ name:"Straight Long Coat",price: "95.00", quantity:"1", subtotal:"95.00", total:"95.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" }];

  constructor() { }

  ngOnInit() {
  }

}
