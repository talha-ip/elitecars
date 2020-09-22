import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-five',
  templateUrl: './home-five.page.html',
  styleUrls: ['./home-five.page.scss'],
})
export class HomeFivePage implements OnInit {
  //for categories
  public items = [
    { name: "Tops", img: "assets/template-themes/becrux/images/home-categories/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/home-categories/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/home-categories/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/home-categories/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/home-categories/5.jpg", count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/home-categories/6.jpg", count: "2" },
  ];
  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
  }

}
