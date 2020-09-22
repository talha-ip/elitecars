import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-six',
  templateUrl: './cart-six.page.html',
  styleUrls: ['./cart-six.page.scss'],
})
export class CartSixPage implements OnInit {
  public items = [
    { name: "Food Name", price: "120", catName: "Category Name", count: 2, img: "assets/images/cart-three/1.png" },
    { name: "Food Name", price: "120", catName: "Category Name", count: 2, img: "assets/images/cart-three/2.png" },
  ]
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
