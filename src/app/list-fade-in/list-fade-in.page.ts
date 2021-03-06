import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';//animation packages
@Component({
  selector: 'app-list-fade-in',
  templateUrl: './list-fade-in.page.html',
  styleUrls: ['./list-fade-in.page.scss'],
  //for animation purpose
  animations: [
    trigger('itemState', [
      state('idle', style({
        opacity: '0.3',
        transform: 'scale(1)'
      })),
    ])
  ]
})
export class ListFadeInPage implements OnInit {
  public items1 = [
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
    { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
    { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
    { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
    { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
    { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
    { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
    { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
    { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", },
    { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
    { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
    { text: "Red and black chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", },
    { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png" },
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
    { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
  ];
  public items = [];
  constructor() {
    //loop for iteration on items with animation after 0.25 sec
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.items.push(this.items1[i]);
      }, 250 * i);
    }
  }
  ngOnInit() { }
}
