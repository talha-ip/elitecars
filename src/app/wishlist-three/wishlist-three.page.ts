import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-wishlist-three',
  templateUrl: './wishlist-three.page.html',
  styleUrls: ['./wishlist-three.page.scss'],
})
export class WishlistThreePage implements OnInit {
  public visEmptyWishlist = false;
  public productCount = 3;
  public deleteProductId = -1;
  public wishlistItems = [
    { image: "assets/template-themes/shoe/images/shoes/sale/1.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: true, new: false, sale: false, id: 0 },
    { image: "assets/template-themes/shoe/images/shoes/featured/3.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: false, new: true, sale: false, id: 1 },
    { image: "assets/template-themes/shoe/images/shoes/formal/1.png", textGrid: "Product Name Will Go Here!", textList: "Product Name Will Go Here! Product Title", price: "90", dPrice: "100", visItem: true, featured: false, new: true, sale: true, id: 2 },
  ]
  constructor() { }

  ngOnInit() {
  }
  temDelete() {
    if (this.deleteProductId == 0) {
      this.wishlistItems[0].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
      // const tabBar = document.getElementById('wishlist-product');
      // tabBar.style.animationName = 'fadeOut';
    }
    else if (this.deleteProductId == 1) {
      this.wishlistItems[1].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
    }
    else if (this.deleteProductId == 2) {
      this.wishlistItems[2].visItem = false;
      this.productCount = this.productCount - 1;
      console.log(this.productCount);
    }
    if (this.productCount == 0) {
      this.visEmptyWishlist = true;
    }
  }
}
