import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent implements OnInit {
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  // For products
  public ven1: any = [
    { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Toyota Corolla 1.8L", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Honda Civic 1.6L", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/3.png", name: "Subaro Impreza 2.0L ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/4.png", name: "KIA Singer 3.0L", price: "15.36", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Ford Explorer 4.0L", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Lexus V8 Super Charger", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/3.png", name: "Hundayi Accent 1.6L", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/4.png", name: "Dodge Charger 3.4L", price: "15.36", dPrice: "11.00", fav: false }];

  constructor() {
  }

  ngOnInit() { }

}
