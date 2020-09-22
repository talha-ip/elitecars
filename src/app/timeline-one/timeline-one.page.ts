import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-one',
  templateUrl: './timeline-one.page.html',
  styleUrls: ['./timeline-one.page.scss'],
})
export class TimelineOnePage implements OnInit {
  items = [
    { startTime: "4", endTime: "6" },
    { startTime: "3", endTime: "4" },
  ];
  items2 = [
    { startTime: "1", endTime: "2" },
    { startTime: "10", endTime: "12" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
