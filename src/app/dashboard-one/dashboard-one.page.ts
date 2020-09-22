import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.page.html',
  styleUrls: ['./dashboard-one.page.scss'],
})
export class DashboardOnePage implements OnInit {
  sliderConfig = {
    slidesPerView: 2,
    spaceBetween: 0,
  };
  constructor() { }

  ngOnInit() {
  }

}
