import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.page.html',
  styleUrls: ['./search-one.page.scss'],
})
export class SearchOnePage implements OnInit {
  public categories = [
    { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg",  count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
 ];

  constructor() { }

  ngOnInit() {
  }

}
