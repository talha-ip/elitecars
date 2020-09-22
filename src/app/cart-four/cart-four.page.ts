import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-four',
  templateUrl: './cart-four.page.html',
  styleUrls: ['./cart-four.page.scss'],
})
export class CartFourPage implements OnInit {
  count = 1;
  public items = [
    { img: "assets/images/cart-one/1.jpg", name: "Women t-shirt", brand: "Lotto.LTD", price: "34.00", count: 1 },
    { img: "assets/images/cart-one/2.jpg", name: "Female t-shirt", brand: "Bata", price: "49.00", count: 1 },
    { img: "assets/images/cart-one/3.jpg", name: "Shirt", brand: "Next", price: "64.00", count: 1 },
    { img: "assets/images/cart-one/4.jpg", name: "Woman Shirt", brand: "plus points", price: "33.00", count: 1 },
    { img: "assets/images/cart-one/5.jpg", name: "Shirt", brand: "Cat's Eye", price: "44.00", count: 1 },
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
