import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-five',
  templateUrl: './cart-five.page.html',
  styleUrls: ['./cart-five.page.scss'],
})
export class CartFivePage implements OnInit {
  public items = [
    { img: "assets/images/cart-two/1.jpg", text: "Item Price Will Be Go Here!", catName: "Category Name", count: 2, dPrice: 120, price: 100, },
    { img: "assets/images/cart-two/2.jpg", text: "Item Price Will Be Go Here!", catName: "Category Name", count: 2, dPrice: 120, price: 100, },
    { img: "assets/images/cart-two/1.jpg", text: "Item Price Will Be Go Here!", catName: "Category Name", count: 2, dPrice: 120, price: 100, },
  ];
  constructor() { }

  ngOnInit() {
  }
  add(i) {
    this.items[i].count = this.items[i].count + 1;
  }
  minus(i) {
    if (this.items[i].count < 2) {
      this.items[i].count = 1;
    }
    else {
      this.items[i].count = this.items[i].count - 1;
    }
  }
}
