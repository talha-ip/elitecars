import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-five',
  templateUrl: './categories-five.page.html',
  styleUrls: ['./categories-five.page.scss'],
})
export class CategoriesFivePage implements OnInit {
  public items = [
    {
      name: "Women Clothing", img: "assets/template-themes/becrux/images/category-images/7.jpg",
      products: [
        { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
        { name: "Bottom", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "9" },
      ]
    },
    {
      name: "Watch Accessories", img: "assets/template-themes/becrux/images/category-images/8.jpg",
      products: [
        { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
