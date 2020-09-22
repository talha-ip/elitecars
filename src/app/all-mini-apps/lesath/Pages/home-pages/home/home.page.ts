import { Component, OnInit, ViewChild, ElementRef, ApplicationRef, ViewEncapsulation } from '@angular/core';
import { IonSlides, MenuController, AlertController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { NavController, IonContent } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { AppEventsService } from 'src/app/services/app-events.service';

if (localStorage.mainCategory == undefined) {
  localStorage.mainCategory = 0;
}
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public mainCategory = parseInt(localStorage.mainCategory.toString());
  public allSubcategories = [];
  subCategoryExplore1 = null;
  subCategoryExplore2 = null;
  mainCategoryData = null;

  visiableExplore = true;
  visiableListView = false;
  segments: any = 'explore';//main segment
  newArrivalsegments: any = 'listView';//main segment
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
  constructor(
    public config: ConfigService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public alertController: AlertController,
    public shared: SharedDataService,
    public applicationRef: ApplicationRef,
    public modalCtrl: ModalController,
    public appEventsService: AppEventsService,
  ) {
    if (localStorage.mainCategory != 0) {
      this.gethomePageAllProducts();
    }
    if (this.shared.allCategories[0] != 1) { this.initializePage(); }
    else {
      let categoriesLoaded = this.appEventsService.subscribe("categoriesLoaded");
      categoriesLoaded.subscriptions.add(categoriesLoaded.event.subscribe(data => {
        this.initializePage();
      }));
    }
  }
  initializePage() {
    if (localStorage.mainCategory == 0) {
      if (this.shared.categories[0].id) {
        localStorage.mainCategory = parseInt(JSON.stringify(this.shared.categories[0].id));
        this.mainCategory = parseInt(this.shared.categories[0].id.toString());
        this.gethomePageAllProducts();
      }
    }
    this.getMainCategoryData();
    //console.log(this.shared.allCategories);
  }
  getMainCategoryData() {
    let count = 0;
    this.subCategoryExplore1 = null;
    this.subCategoryExplore2 = null;
    this.allSubcategories = [];
    this.mainCategoryData = null;
    this.shared.allCategories.forEach(element => {
      if (this.mainCategory == element.id) this.mainCategoryData = element;
      // if (count == 1 && element.parent == this.mainCategory) { this.subCategoryExplore2 = element; count++; }
      // if (count == 0 && element.parent == this.mainCategory) { this.subCategoryExplore1 = element; count++; }
      if (element.parent == this.mainCategory) { this.allSubcategories.push(element); }
    });
  }
  gethomePageAllProducts() {
    this.shared.getMainCategoryFeaturedSaleNewestProducts(this.mainCategory);

    this.changeTab(this.mainCategory);
  }
  getParentCategories() {
    return this.shared.categories;
  }

  selectMainCategory(v) {
    if (v == 0) return 0;
    this.shared.getMainCategoryFeaturedSaleNewestProducts(v);
    //localStorage.mainCategory = parseInt(v)
    this.subCategoryModel = 0;
    this.changeTab(v);
    this.getMainCategoryData();
    //console.log(localStorage.mainCategory);
  }
  public segmentChangeFirstTime = 0;
  segmentChanged(value) {
    if (value == "newArrivals") {
      if (localStorage.appFirstTimeStart == undefined) {
        if (this.products.length == 0)
          this.products = this.shared.newestProductArray;
        localStorage.appFirstTimeStart = "loaded";
      }
      //   this.changeTab("0");
      //   this.subCategoryModel = 0;
    }
  }
  moveToAllProducts() {
    this.segments = "newArrivals";
  }
  selectSubCategory(value) {
    console.log("called");
    this.segments = "newArrivals";
    this.changeTab(value);
    this.subCategoryModel = value;
  }
  getProductImage(p) {
    if (p == 1) return "assets/woocommerce-placeholder.gif";
    else if (p.images.length != 0) return p.images[0].src;
    else
      return "assets/woocommerce-placeholder.gif";
  }
  openViewTypes(i) {
    if (i == 1) {
      this.visiableExplore = true;
      this.visiableListView = false;
    }
    else {
      this.visiableExplore = false;
      this.visiableListView = true;
    }
  }
  goToCart() {
    this.nav.navigateForward('mini-lesath-cart');
  }
  ngOnInit() {
  }
  //segment 3 from here
  queryAttributes = "";
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;
  //@ViewChild(IonRange) priceRange: IonRange;
  products = [];
  selectedTab = 0;
  categoryId = '';
  categoryName = '';
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A', 'Sort'];
  page = 1;
  applyFilter = false;
  filters = [];
  selectedFilters = [];
  on_sale: any;
  featured: any;
  filterOnSale = false;
  filterFeatured = false;
  loadingServerData = true;
  type = "";
  listOfFilteredIdsFromCustom = [];
  subCategoryModel = 0;
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  public emptyArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  resetProducts() {
    this.products = this.emptyArray;
    setTimeout(() => {
      this.scrollToTop();
    }, 500);
  }
  enableDisableInfiniteScroll(val) {
    try {
      this.infinite.disabled = !val;
    } catch (error) {
    }
  }
  public productsLoaderShow = false;
  getFilterdProducts() {
    if (this.page == 1) {
      this.resetProducts();
      //this.loading.show();
    }
    this.productsLoaderShow = true;
    if (this.selectedTab == 0) return 0;
    let q = 'products?page=' + this.page + "&status=publish";
    if (this.selectedTab != 0) q = q + '&category=' + this.selectedTab;
    if (this.sortOrder == "Newest") q = q + "&order=desc&order_by=date";
    else if (this.sortOrder == "A - Z") q = q + "&order=asc&order_by=title";
    else if (this.sortOrder == "Z - A") q = q + "&order=desc&order_by=title";
    console.log(q);
    this.config.getWoo(q).then((data: any) => {

      let dat = data;

      if (this.page == 1) {
        this.emptyProductList();
        this.scrollToTop();
      }
      if (dat.length != 0) {
        this.page++;
        if (this.page == 1) this.enableDisableInfiniteScroll(true);

        for (let value of dat) {
          this.products.push(value);
        }
      }

      if (dat.length == 0 || dat.length < 10) {
        this.enableDisableInfiniteScroll(false)
      }
      if (this.infinite != undefined) this.infinite.complete();
      this.loadingServerData = true;
      this.productsLoaderShow = false;

      localStorage.mainCategory = this.mainCategory;
    });
  }
  emptyProductList(): any {
    this.products = [];
  }
  reset() {
    this.type = "latest";
    this.sortOrder = "Newest"
    this.page = 1;
    this.getFilterdProducts();
  }
  //changing tab
  changeTab(c) {
    if (c == 0) this.selectedTab = this.mainCategory;
    else this.selectedTab = c;
    this.reset();
  }
  getSortProducts(value) {

    if (value == this.sortOrder) return 0;
    else {
      this.sortOrder = value;
      //this.enableDisableInfiniteScroll(true)
      this.applyFilter = true;
      this.page = 1;
      this.type = "";
      this.getFilterdProducts();
    }
  }
  async openSortBy() {
    var inputsArray = [];
    this.shared.translateArray(this.sortArray).then(async (res: any) => {
      for (let key in res) {
        if (key == 'Sort') continue;
        if (key == this.sortOrder) {
          inputsArray.push({
            name: res[key],
            type: 'radio',
            label: res[key],
            value: key,
            checked: true
          });
        }
        else
          inputsArray.push({
            name: res[key],
            type: 'radio',
            label: res[key],
            value: key
          });
      }
      const alert = await this.alertController.create({
        inputs:
          inputsArray,
        buttons: [
          {
            text: res['Sort'],
            cssClass: 'secondary',
            handler: (v) => {
              this.getSortProducts(v)
            }
          }
        ]
      });
      await alert.present();
    });
  }
  scrollToTop() {
    try {
      if (this.content) {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
      }

    } catch (error) {

    }
  }
  onScroll(e) {
    if (e.scrollTop >= 800) this.scrollTopButton = true;
    if (e.scrollTop < 800) this.scrollTopButton = false;
  }
  removeString(s) {
    //console.log(s.replace('pa_', ''));
    return s.replace('pa_', '');
  }
  goToProductDetail(data) {
    let p = data
    this.shared.singleProductPageData.push(p);
    this.nav.navigateForward("mini-lesath-product-detail/" + p.id);
  }
  getCategoryName(id) {
    let r = "";
    this.shared.allCategories.forEach(element => {
      if (id == element.id) r = element.name;
    });
    return r;
  }
  getCategoryData(id) {
    let r = null;
    this.shared.allCategories.forEach(element => {
      if (id == element.id) r = element;
    });
    return r;
  }
}