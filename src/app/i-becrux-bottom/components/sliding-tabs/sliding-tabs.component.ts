import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sliding-tabs',
  templateUrl: './sliding-tabs.component.html',
  styleUrls: ['./sliding-tabs.component.scss'],
})
export class SlidingTabsComponent implements OnInit {
  @Input('type') type;//product data
  products: any = [1, 1, 1, 1, 1, 1, 1, 1];
  productsImage: any = [1, 1, 1, 1, 1, 1, 1, 1];
  scrollSegments = "all"//scrollable segment
  scrollSegmentsImage = "allImage"//scrollable segment for image
  visiable = false;
  count = 0;
  constructor(public loadingController: LoadingController) {
    setTimeout(() => {
      if (this.type == "notImage") {
        this.visiable = true;
      }
      else if (this.type == "image") {
        this.visiable = false;
      }
    }, 4000);
    setTimeout(() => {
      this.products = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Toyota Corolla 1.8L", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Honda Civic 1.6L", price: "14.64", dPrice: "31.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Subaro Impreza 2.0L", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/9.jpg", name: "KIA Singer 3.0L", price: "15.36", dPrice: "25.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/10.jpg", name: "Ford Explorer 4.0L", price: "12.23", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/11.jpg", name: "Lexus V8 Super Charger", price: "14.64", dPrice: "18.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Hundayi Accent 1.6L", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Dodge Charger 3.4L", price: "15.36", dPrice: "25.00", fav: false, res: true }
      ];
      this.productsImage = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Subaro Impreza 2.0L", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Hundayi Accent 1.6L ", price: "14.64", dPrice: "25.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/14.jpg", name: "Subaro Impreza 2.0L", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/15.jpg", name: "Ford Explorer 4.0L", price: "15.36", dPrice: "25.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Toyota Corolla 1.8L", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/18.jpg", name: "Lexus V8 Super Charger", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "KIA Singer 3.0L", price: "14.64", dPrice: "25.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/17.jpg", name: "Honda Civic 1.6L", price: "15.36", dPrice: "21.00", fav: false, res: true }
      ];
    }, 4000);
  }
  //for infinite scroll
  loadData(event) {
    setTimeout(() => {
      if (this.count == 0) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Honda Civic 1.6L", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Subaro Impreza 2.0L", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Toyota Corolla 1.8L", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "KIA Singer 3.0L", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 1) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Ford Explorer 4.0L", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Lexus V8 Super Charger", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Honda Civic 1.6L", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Subaro Impreza 2.0L", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 2) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Honda Civic 1.6L", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Honda Civic 1.6L", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Honda Civic 1.6L", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Honda Civic 1.6L", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.count = 0;
      }
      event.target.complete();
    }, 500);
  }
  ngOnInit() { }
  async  enableLoadingController(i) {
    // if (i == 0) {
    //   this.visiable = true;
    // }
    // else if (i == 1) {
    //   this.visiable = false;
    // }
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 200
    });
    return await loading.present();
  }
}