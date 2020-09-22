import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-eight',
  templateUrl: './aboutus-eight.page.html',
  styleUrls: ['./aboutus-eight.page.scss'],
})
export class AboutusEightPage implements OnInit {
  public items1 = [
    { img: "assets/images/about-us/face-1.png", name: "Smith", designation: "Android Developer" },
    { img: "assets/images/about-us/face-2.png", name: "John", designation: "Ui/Ux Designer" },
    { img: "assets/images/about-us/face-3.png", name: "Mono", designation: "Graphic Designer" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
