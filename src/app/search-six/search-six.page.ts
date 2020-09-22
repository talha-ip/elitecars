import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-search-six',
  templateUrl: './search-six.page.html',
  styleUrls: ['./search-six.page.scss'],
})
export class SearchSixPage implements OnInit {
  public cardItems = [
    "Chinease",
    "Thai",
    "Pizza Restaurants",
    "Fast Food",
    "Best Burger Restaurants",
    "Steaks",
    "BBQ Foods",
    "BBQ",
    "Chinease",
    "Thai",
    "Pizza Restaurants",
    "Fast Food",
    "Best Burger Restaurants",
    "Steaks",
    "BBQ Foods",
    "BBQ",
  ];
  restaurentName = [
    { img: "assets/images/search/res-1.png", name: "Restaurant Name", },
    { img: "assets/images/search/res-1.png", name: "Restaurant Name", }
  ];
  catName = [
    { img: "assets/images/search/cat-1.png", name: "Steak Food", },
    { img: "assets/images/search/cat-2.png", name: "Salads", },
    { img: "assets/images/search/cat-3.png", name: "Breakfast", }
  ];
  sliderConfigRest = {
    slidesPerView: 1.3,
    spaceBetween: 0,
  };
  sliderConfigCat = {
    slidesPerView: 2.7,
    spaceBetween: 0,
  };
  constructor() { }

  ngOnInit() {
  }

}
