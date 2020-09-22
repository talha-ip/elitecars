import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-two',
  templateUrl: './search-two.page.html',
  styleUrls: ['./search-two.page.scss'],
})
export class SearchTwoPage implements OnInit {
  items = [
    "Polo Men Shirt",
    "Casual Shirts (men)",
    "T-Shirt for Men",
    "Formal Shirts (men)",
    "Men Shirts",
    "Shirts"
  ]
  constructor() { }

  ngOnInit() {
  }

}
