import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { MenuController, ToastController, NavController } from '@ionic/angular';
import { ConfigService } from '../i-becrux-side/providers/config/config.service';
import { SharedDataService } from '../i-becrux-side/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home-ten',
  templateUrl: './home-ten.page.html',
  styleUrls: ['./home-ten.page.scss'],
})
export class HomeTenPage implements OnInit {
  segments: any = 'sale';
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  // For products
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public newestItems: any = [1, 1, 1, 1, 1, 1];

  constructor(private service: CustomThemeService, public menuCtrl: MenuController, public toastController: ToastController, public config: ConfigService, public shared: SharedDataService, public nav: NavController) {

    setTimeout(() => {
      this.newestItems = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Flower Dress", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true }
      ];
      this.tab1 = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailor Pant", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed T-shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/14.jpg", name: "Strip Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "15.36", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Petal Shirt", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Pearly Sleeve Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted gilet hoodie", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown long coat", price: "14.64", dPrice: "11.00", fav: false, res: true }
      ];
    }, 4000);
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
  }
  ngOnInit() {
  }
}
