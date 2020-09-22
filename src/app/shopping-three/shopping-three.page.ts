import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-shopping-three',
  templateUrl: './shopping-three.page.html',
  styleUrls: ['./shopping-three.page.scss'],
})
export class ShoppingThreePage implements OnInit {

  @ViewChild('slideBanner', { static: false }) slideBanner: IonSlides;

  items = [
    "assets/images/shopping/chair1.png",
    "assets/images/shopping/chair2.png",
    "assets/images/shopping/chair3.png",
  ];
  constructor() { }

  ngOnInit() {
  }
  sliderBack() {
    this.slideBanner.slidePrev();
  }
  sliderForward() {
    this.slideBanner.slideNext();
  }
}
