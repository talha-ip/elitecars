import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-list-swipe-full-image',
  templateUrl: './list-swipe-full-image.page.html',
  styleUrls: ['./list-swipe-full-image.page.scss'],
})
export class ListSwipeFullImagePage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  public items = [
    { img: "assets/images/big-images/big1.jpg" },
    { img: "assets/images/big-images/big2.jpg" },
    { img: "assets/images/big-images/big3.jpg" },
    { img: "assets/images/big-images/big4.jpg" },
    { img: "assets/images/big-images/big5.jpg" },
    { img: "assets/images/big-images/big6.jpg" },
    { img: "assets/images/big-images/big7.jpg" },
    { img: "assets/images/big-images/big1.jpg" },
    { img: "assets/images/big-images/big2.jpg" },
    { img: "assets/images/big-images/big3.jpg" },
    { img: "assets/images/big-images/big4.jpg" },
    { img: "assets/images/big-images/big5.jpg" },
    { img: "assets/images/big-images/big6.jpg" },
    { img: "assets/images/big-images/big7.jpg" },
  ];
  constructor( private service: CustomThemeService) {

    this.itemColor = ["#F44336"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "autumn")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "night")//if selected color is purple 
    {
      this.itemColor = ["#673AB7"];
    }
    else if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }
    else if (this.data == "orginal")//if selected color is green
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "red")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
    else if (this.data == "purple")//if selected color is sharp pink
    {
      this.itemColor = ["#E91E63"];
    }
    else if (this.data == "Lightblue")//if selected color is dark blue
    {
      this.itemColor = ["#3F51B5"];
    }
    else if (this.data == "Lightgreen")//if selected color is light blue
    {
      this.itemColor = ["#00BCD4"];
    }
    else if (this.data == "Lightgray")//if selected color is light green
    {
      this.itemColor = ["#8BC34A"];
    }
    else if (this.data == "blue")//if selected color is dark green 
    {
      this.itemColor = ["#008577"];
    }
  }
  ngOnInit() { }
}