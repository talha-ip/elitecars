import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll, MenuController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.page.html',
  styleUrls: ['./component-details.page.scss'],
})
export class ComponentDetailsPage {
    // For Multipurpose Screen Content
    public itemsScreen: any = [];
  // For UI Components Array
  public screens = [
    {
      icon: 'list',
      category: 'List View',
      Number: 12,
      expand: false,
      subCat: [
        {
          name: "Infinite Scroll", url: "/list-infinte-scroll"
        },
        {
          name: "Refresher", url: "/list-refresher"
        },
        {
          name: "Slide To Left Animation", url: "/list-slide-left"
        },
        {
          name: "Slide To Right Animation", url: "/list-slide-right"
        },
        {
          name: "Fade In Animation", url: "/list-fade-in"
        },
        {
          name: "Thumbnail With Products", url: "/list-swipe-thumbnail-products"
        },
        {
          name: "Full Image Left To Right", url: "/list-swipe-full-image"
        },
        {
          name: "Items With Header", url: "/list-swipe-with-header"
        },
        {
          name: "Swipe Avatar Left To Right", url: "/list-swipe-left-to-right"
        },
        {
          name: "Swipe Avatar Right To Left", url: "/list-swipe-right-to-left"
        },
        {
          name: "Reorder List", url: "/list-reorder"
        },
        {
          name: "Expandable List", url: "/list-expandable"
        }
      ]
    },
    {
      icon: 'card',
      category: 'Card',
      Number: 9,
      expand: false,
      subCat: [
        {
          name: "Dashboard", url: "/card-dashboard"
        },
        {
          name: "Simple List", url: "/card-list-simple"
        },
        {
          name: "Avatar List", url: "/card-list-avatar"
        },
        {
          name: "Shopping Cart", url: "/card-shoping-simple"
        },
        {
          name: "Shopping Cart Slider", url: "/card-shoping-slider"
        },
        {
          name: "Timeline Theme 1", url: "/card-timeline-theme-one"
        },
        {
          name: "Timeline Theme 2", url: "/card-timeline-theme-two"
        },
        {
          name: "Timeline Theme 3", url: "/card-timeline-theme-three"
        },
        {
          name: "Images", url: "/card-images"
        }
      ]
    },
    {
      icon: 'grid',
      category: 'Grid',
      Number: 7,
      expand: false,
      subCat: [
        {
          name: "Two line", url: "/grid-two-line"
        },
        {
          name: "Three line", url: "/grid-three-line"
        },
        {
          name: "Category", url: "/grid-category"
        },
        {
          name: "Grid sub category one", url: "/grid-subcategory"
        },
        {
          name: "Grid sub category two", url: "/grid-album"
        },
        {
          name: "Album", url: "/grid-section"
        },
        {
          name: "Section", url: "/grid-with-header"
        }
      ]
    },
    {
      icon: 'tablet-portrait',
      category: 'Tabs',
      Number: 8,
      expand: false,
      subCat: [
        { name: "Footer Text", url: "/tab-footer-text" },
        { name: "Footer Icons", url: "/tab-footer-icon" },
        { name: "Footer Text Icons", url: "/tab-footer-text-icon" },
        { name: "Footer Text Icons Badges", url: "/tab-footer-text-icon-badge" },
        { name: "Header Text", url: "/tab-header-text" },
        { name: "Header Icons", url: "/tab-header-icon" },
        { name: "Header Text Icons", url: "/tab-header-text-icon" },
        { name: "Header Text Icons Badges", url: "/tab-header-text-icon-badge" },
      ]
    },
    {
      icon: 'tablet-portrait',
      category: 'Segments',
      Number: 7,
      expand: false,
      subCat: [
        { name: "Header Text", url: "/segment-header-text" },
        { name: "Header Icons", url: "/segment-header-icon" },
        { name: "Scrollable Header Text", url: "/segment-scrollable-header-text" },
        { name: "Scrollable Header Icons", url: "/segment-scrollable-header-icon" },
        { name: "Footer Text", url: "/segment-footer-text" },
        { name: "Footer Icons", url: "/segment-footer-icon" },
        { name: "Footer Text Icons", url: "/segment-footer-text-icon" },
      ]
    },
    {
      icon: 'bookmarks',
      category: 'FAB',
      Number: 12,
      expand: false,
      subCat: [
        { name: "Simple Text", url: "/fab-simple-text" },
        { name: "Simple Icon", url: "/fab-simple-icon" },
        { name: "Up Text", url: "/fab-up-text" },
        { name: "Up Icon", url: "/fab-up-icon" },
        { name: "Down Text", url: "/fab-down-text" },
        { name: "Down Icon", url: "/fab-down-icon" },
        { name: "Left Text", url: "/fab-left-text" },
        { name: "Left Icon", url: "/fab-left-icon" },
        { name: "Right Text", url: "/fab-right-text" },
        { name: "Right Icon", url: "/fab-right-icon" },
        { name: "Middle Text", url: "/fab-middle-text" },
        { name: "Middle Icon", url: "/fab-middle-icon" },
      ]
    },
    {
      icon: 'newspaper',
      category: 'Form',
      Number: 9,
      expand: false,
      subCat: [
        { name: "Login Theme One", url: '/form-login-one' },
        { name: "Login Theme Two", url: '/form-login-two' },
        { name: "Login Theme Three", url: '/form-login-three' },
        { name: "Register Theme One", url: '/form-register-one' },
        { name: "Register Theme Two", url: '/form-register-two' },
        { name: "Register Theme Three", url: '/form-register-three' },
        { name: "Forget Theme One", url: '/form-forget-one' },
        { name: "Forget Theme Two", url: '/form-forget-two' },
        { name: "Forget Theme Three", url: '/form-forget-three' },
      ]
    },
    {
      icon: 'radio-button-off',
      category: 'Buttons',
      Number: 6,
      expand: false,
      subCat: [
        { name: "Basic Style 1", url: '/button-basic-one' },
        { name: "Basic Style 2", url: '/button-basic-two' },
        { name: "Text", url: '/button-text' },
        { name: "Outline", url: '/button-outline' },
        { name: "Transparent", url: '/button-transparent' },
        { name: "Expand", url: '/button-expand' },
      ]
    },
    {
      icon: 'alert',
      category: 'Alerts',
      Number: 5,
      expand: false,
      subCat: [
        { name: "Basic", url: '/alert-basic' },
        { name: "Confirmation", url: '/alert-confirmation' },
        { name: "Prompt", url: '/alert-prompt' },
        { name: "Radio", url: '/alert-radio' },
        { name: "Checkbox", url: '/alert-checkbox' },
      ]
    },
    {
      icon: 'albums',
      category: 'Sliders',
      Number: 4,
      expand: false,
      subCat: [
        { name: "Simple Slider", url: '/slider-simple' },
        { name: "Images Slider", url: '/slider-images' },
        { name: "Autoplay Slider", url: '/slider-autoplay' },
        { name: "Arrows Slider", url: '/slider-arrows' },
      ]
    },
    {
      icon: 'checkbox',
      category: 'Checkbox',
      Number: 4,
      expand: false,
      subCat: [
        { name: "Avatar With Square", url: '/checkbox-simple' },
        { name: "Square Icon", url: '/checkbox-square' },
        { name: "Avatar With Circle", url: '/checkbox-right-with-avatar' },
        { name: "Big images", url: '/checkbox-with-big-image' },
      ]
    },
    {
      icon: 'radio-button-on',
      category: 'Radio',
      Number: 4,
      expand: false,
      subCat: [
        { name: "Simple Left", url: '/radio-simple-left' },
        { name: "Simple Right", url: '/radio-simple-right' },
        { name: "Radio Avatar", url: '/radio-circle-with-avatar' },
        { name: "Radio Thumbnail", url: '/radio-square-with-big-image' },
      ]
    },
    {
      icon: 'bookmark',
      category: 'Badge',
      Number: 3,
      expand: false,
      subCat: [
        { name: "Card", url: '/badge-with-card' },
        { name: "Tabs", url: '/badge-with-tab' },
        { name: "List", url: '/badge-with-list' },
      ]
    },
    {
      icon: 'remove',
      category: 'Toast',
      Number: 3,
      expand: false,
      subCat: [
        { name: "Bottom Toast", url: '/toast-bottom' },
        { name: "Middle Toast", url: '/toast-middle' },
        { name: "Top Toast", url: '/toast-top' },
      ]
    },
    {
      icon: 'search',
      category: 'Searchbar',
      Number: 2,
      expand: false,
      subCat: [
        { name: "Simple", url: '/searchbar-simple' },
        { name: "Images", url: '/searchbar-with-images' },
      ]
    },
    {
      icon: 'chatbubbles',
      category: 'Action Sheet',
      Number: 2,
      expand: false,
      subCat: [
        { name: "Simple Text", url: '/actionsheet-simple' },
        { name: "Icons", url: '/actionsheet-icon' },
      ]
    },
    {
      icon: 'logo-flickr',
      category: 'Toggle',
      Number: 2,
      expand: false,
      subCat: [
        { name: "Avatar", url: '/toggle-with-avatar' },
        { name: "Simple left Side", url: '/toggle-simple-left' },
      ]
    }
  ];constructor( private service: CustomThemeService, private navCtrl: NavController, public menuCtrl: MenuController) {
    // For Expandable Screen Item
    this.itemsScreen = [
      { expandedHelp: false },
    ];
  }
  // For Expandable Screens Generic Function
  expandItems(item): void {
    if (item.expand == true) {
      item.expand = false;
    }
    else {
      item.expand = true;
    }
  }
  ngOnInit() { }
  ionViewWillLeave(){
    this.menuCtrl.close('Menu1');
  }
  ionViewDidLeave(){
    this.menuCtrl.close('Menu1');
  }
}
