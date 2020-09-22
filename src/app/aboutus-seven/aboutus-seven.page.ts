import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-seven',
  templateUrl: './aboutus-seven.page.html',
  styleUrls: ['./aboutus-seven.page.scss'],
})
export class AboutusSevenPage implements OnInit {
  public items1 = [
    { img: "assets/images/about-us/face-1.png", name: "Smith", designation: "Android Developer" },
    { img: "assets/images/about-us/face-2.png", name: "John", designation: "Ui/Ux Designer" },
    { img: "assets/images/about-us/face-3.png", name: "Mono", designation: "Graphic Designer" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
