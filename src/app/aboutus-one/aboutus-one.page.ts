import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus-one',
  templateUrl: './aboutus-one.page.html',
  styleUrls: ['./aboutus-one.page.scss'],
})
export class AboutusOnePage implements OnInit {
  public items1 = [
    { img: "assets/images/about-us/face-1.png", name: "Smith", designation: "Android Developer" },
    { img: "assets/images/about-us/face-2.png", name: "John", designation: "Ui/Ux Designer" },
    { img: "assets/images/about-us/face-3.png", name: "Mono", designation: "Graphic Designer" },
  ];
  public items2 = [
    { img: "assets/images/about-us/face-4.png", name: "Adam", designation: "Web Developer" },
    { img: "assets/images/about-us/face-5.png", name: "Mike", designation: "Content Writer" },
    { img: "assets/images/about-us/face-6.png", name: "Robert", designation: "Marketer" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
