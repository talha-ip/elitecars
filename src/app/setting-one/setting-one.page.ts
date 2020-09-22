import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-one',
  templateUrl: './setting-one.page.html',
  styleUrls: ['./setting-one.page.scss'],
})
export class SettingOnePage implements OnInit {
  itemGroup = [
    {
      nameItemDivider: "Notifications Setting",
      itemDetails: [
        { name: "App Notifications", status: true },
        { name: "Push Notifications", status: false },
        { name: "Floating Notifications", status: true }
      ]
    },
    {
      nameItemDivider: "Sounds Setting",
      itemDetails: [
        { name: "Alert Sounds", status: true },
        { name: "Notification Sounds", status: false }
      ]
    },
    {
      nameItemDivider: "Vibration Setting",
      itemDetails: [
        { name: "Vibrate with sounds", status: true },
        { name: "Vibrate on Notification", status: false }
      ]
    }
  ];
 
  constructor() { }

  ngOnInit() {
  }
  ItemStatusFun(status,j, i) {
    console.log(this.itemGroup[i].itemDetails[j].status);
    if(status==true)
      this.itemGroup[i].itemDetails[j].status= false;
    else
    this.itemGroup[i].itemDetails[j].status= true;
  }
}
