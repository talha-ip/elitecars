import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Platform, NavController, ModalController, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './i-becrux-side/Pages/login/login.page';
import { CurrencyListPage } from './i-becrux-side/Pages/currency-list/currency-list.page';
import { LanguagePage } from './i-becrux-side/Pages/language/language.page';
import { ThemeService } from './services/theme.service';
import { CustomThemeService } from './services/custom-theme.service';
import { DataServiceService } from './i-rigel-side/Pages/services/data-service.service';
import { AppEventsService } from './services/app-events.service';

// For Static Theme Apply
const themes = {
  undefined: {
    primary: '',
    secondary: '',
    tertiary: '',
    light: '',//background
    medium: '',//all btn color
    dark: '',//text color
    warning: ''
  }
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.scss']
})
export class AppComponent {
  //for dark theme 
  darkThemeVar='light';
  dark = false;
  // For UI Components Array
  public components = [
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
      icon: 'newspaper-outline',
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
  ]

  // For Becrux, Lesath, Rigel Bottom
  bb_visible = true;
  lb_visible = true;
  sb_visible = true;

  // For Main Menu (Components)
  itemColor: any;
  public iconColorVar = "";

  // For Multipurpose Screen Content
  public itemsScreen: any = [];

  public screens = [
    {
      category: 'Ecommerce Homes',
      Number: 12,
      expand: false,
      subCat: [
        { name: 'Home 01', url: '/home-one' },
        { name: 'Home 02', url: '/home-two' },
        { name: 'Home 03', url: '/home-three' },
        { name: 'Home 04', url: '/home-four' },
        { name: 'Home 05', url: '/home-five' },
        { name: 'Home 06', url: '/home-six' },
        { name: 'Home 07', url: '/home-seven' },
        { name: 'Home 08', url: '/home-eight' },
        { name: 'Home 09', url: '/home-nine' },
        { name: 'Home 10', url: '/home-ten' },
        { name: 'Home 11', url: '/home-eleven' },
        { name: 'Home 12', url: '/home-twelve' },
      ]
    },
    {
      category: 'Product Categories',
      Number: 7,
      expand: false,
      subCat: [
        { name: 'Category 01', url: '/categories-one' },
        { name: 'Category 02', url: '/categories-two' },
        { name: 'Category 03', url: '/categories-three' },
        { name: 'Category 04', url: '/categories-four' },
        { name: 'Category 05', url: '/categories-five' },
        { name: 'Category 06', url: '/categories-six' },
        { name: 'Category 07', url: '/categories-seven' }
      ]
    },
    {
      category: 'Sign In',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'SignIn 01', url: '/form-login-one' },
        { name: 'SignIn 02', url: '/form-login-two' },
        { name: 'SignIn 03', url: '/form-login-three' },
        { name: 'SignIn 04', url: '/signin-one' },
        { name: 'SignIn 05', url: '/signin-two' },
        { name: 'SignIn 06', url: '/signin-three' },
        { name: 'SignIn 07', url: '/login-seven' },
        { name: 'SignIn 08', url: '/login-eight' },
        { name: 'SignIn 09', url: '/login-nine' },
        { name: 'SignIn 10', url: '/login-ten' },
        { name: 'SignIn 11', url: '/login-eleven' },
        { name: 'SignIn 12', url: '/login-tweleve' },
        { name: 'SignIn 13', url: '/login-thirteen' },
        { name: 'SignIn 14', url: '/login-fourteen' }
      ]
    },
    {
      category: 'Sign Up',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'SignUp 01', url: '/form-register-one' },
        { name: 'SignUp 02', url: '/form-register-two' },
        { name: 'SignUp 03', url: '/form-register-three' },
        { name: 'SignUp 04', url: '/signup-one' },
        { name: 'SignUp 05', url: '/signup-two' },
        { name: 'SignUp 06', url: '/signup-three' },
        { name: 'SignUp 07', url: '/register-seven' },
        { name: 'SignUp 08', url: '/register-eight' },
        { name: 'SignUp 09', url: '/register-nine' },
        { name: 'SignUp 10', url: '/register-ten' },
        { name: 'SignUp 11', url: '/register-eleven' },
        { name: 'SignUp 12', url: '/register-twelve' },
        { name: 'SignUp 13', url: '/register-thirteen' },
        { name: 'SignUp 14', url: '/register-fourteen' },
      ]
    },
    {
      category: 'Forgot Password',
      Number: 14,
      expand: false,
      subCat: [
        { name: 'Forgot Password 01', url: '/form-forget-one' },
        { name: 'Forgot Password 02', url: '/form-forget-two' },
        { name: 'Forgot Password 03', url: '/form-forget-three' },
        { name: 'Forgot Password 04', url: '/forgot-pass-one' },
        { name: 'Forgot Password 05', url: '/forgot-pass-two' },
        { name: 'Forgot Password 06', url: '/forget-pass-three' },
        { name: 'Forgot Password 07', url: '/forget-seven' },
        { name: 'Forgot Password 08', url: '/forget-eight' },
        { name: 'Forgot Password 09', url: '/forget-nine' },
        { name: 'Forgot Password 10', url: '/forget-ten' },
        { name: 'Forgot Password 11', url: '/forget-eleven' },
        { name: 'Forgot Password 12', url: '/forget-twelve' },
        { name: 'Forgot Password 13', url: '/forget-thirteen' },
        { name: 'Forgot Password 14', url: '/forget-fourteen' },
      ]
    },
    {
      category: 'Search',
      Number: 6,
      expand: false,
      subCat: [
        { name: 'Search 01', url: '/searchbar-simple' },
        { name: 'Search 02', url: '/searchbar-with-images' },
        { name: 'Search 03', url: '/search-one' },
        { name: 'Search 04', url: '/search-two' },
        { name: 'Search 05', url: '/search-five' },
        { name: 'Search 06', url: '/search-six' },
      ]
    },
    {
      category: 'Intros',
      Number: 4,
      expand: false,
      subCat: [
        { name: 'Intro 01', url: '/intro-one' },
        { name: 'Intro 02', url: '/intro-two' },
        { name: 'Intro 03', url: '/intro-three' },
        { name: 'Intro 04', url: '/intro-four' }
      ]
    },
    {
      category: 'Product Details',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Product Details 01', url: '/product-detail-one' },
        { name: 'Product Details 02', url: '/product-detail-two' },
        { name: 'Product Details 03', url: '/product-detail-three' }
      ]
    },
    {
      category: 'Carts',
      Number: 6,
      expand: false,
      subCat: [
        { name: 'Cart 01', url: '/cart-one' },
        { name: 'Cart 02', url: '/cart-two' },
        { name: 'Cart 03', url: '/cart-three' },
        { name: 'Cart 04', url: '/cart-four' },
        { name: 'Cart 05', url: '/cart-five' },
        { name: 'Cart 06', url: '/cart-six' },
      ]
    },
    {
      category: 'Orders Details',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Order 01', url: '/order-detail-one' },
        { name: 'Order 02', url: '/order-detail-two' },
        { name: 'Order 03', url: '/order-detail-three' }
      ]
    },
    {
      category: 'Wishlists',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Wishlist 01', url: '/wishlist-one' },
        { name: 'Wishlist 02', url: '/wishlist-two' },
        { name: 'Wishlist 03', url: '/wishlist-three' }
      ]
    },
    {
      category: 'ThankYou',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'ThankYou 01', url: '/thankyou-one' },
        { name: 'ThankYou 02', url: '/thankyou-two' },
        { name: 'ThankYou 03', url: '/thankyou-three' }
      ]
    },
    {
      category: 'Shops',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'Shop 01', url: '/shop-one' },
        { name: 'Shop 02', url: '/shop-two' },
        { name: 'Shop 03', url: '/shopping-three' },
      ]
    },
    {
      category: 'About Us',
      Number: 10,
      expand: false,
      subCat: [
        { name: 'About Us 01', url: '/aboutus-one' },
        { name: 'About Us 02', url: '/aboutus-two' },
        { name: 'About Us 03', url: '/aboutus-three' },
        { name: 'About Us 04', url: '/aboutus-four' },
        { name: 'About Us 05', url: '/aboutus-five' },
        { name: 'About Us 06', url: '/aboutus-six' },
        { name: 'About Us 07', url: '/aboutus-seven' },
        { name: 'About Us 08', url: '/aboutus-eight' },
        { name: 'About Us 09', url: '/aboutus-nine' },
        { name: 'About Us 10', url: '/aboutus-ten' },
      ]
    },
    {
      category: 'News',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'News 01', url: '/news-one' },
        // { name: 'News 02', url: '/news-two' },
        { name: 'News 02', url: '/news-three' },
      ]
    },
    {
      category: 'Payment Methods',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Payment Methods 01', url: '/payment-one' },
        // { name: 'Payment Methods 02', url: '/payment-two' },
      ]
    },
    {
      category: 'profiles',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'profile 01', url: '/profile-one' },
        { name: 'profile 02', url: '/profile-two' },
      ]
    },
    {
      category: 'Settings',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Setting 01', url: '/setting-one' },
      ]
    },
    {
      category: 'Verifications',
      Number: 8,
      expand: false,
      subCat: [
        { name: 'Verification 01', url: '/verification-one' },
        // { name: 'Verification 02', url: '/verification-two' },
        { name: 'Verification 02', url: '/verification-three' },
        { name: 'Verification 03', url: '/verification-four' },
        { name: 'Verification 04', url: '/verification-five' },
        { name: 'Verification 05', url: '/verification-six' },
        { name: 'Verification 06', url: '/verification-seven' },
        { name: 'Verification 07', url: '/verification-eight' },
        { name: 'Verification 08', url: '/verification-nine' },
        // { name: 'Verification 10', url: '/verification-ten' },
      ]
    },
    {
      category: 'Timelines',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Timeline 01', url: '/timeline-one' },
      ]
    },
    {
      category: 'Chats',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Chat 01', url: '/chat-one' },
      ]
    },
    {
      category: 'Dashboards',
      Number: 1,
      expand: false,
      subCat: [
        { name: 'Dashboard 01', url: '/dashboard-one' },
      ]
    },
    {
      category: 'Sliders',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'Slider 01', url: '/slider-one' },
        { name: 'Slider 02', url: '/slider-two' },
      ]
    },
    {
      category: 'Audio Player',
      Number: 2,
      expand: false,
      subCat: [
        { name: 'Audio Player 01', url: '/audio-player-one' },
        { name: 'Audio Player 02', url: '/audio-player-two' },
      ]
    },
  ]

  // For UIUX Templates Content
  public templates = [
    {
      category: 'Ecommerce',
      Number: 6,
      expand: false,
      subCat: [
        { name: 'Becrux Side', url: '/bs-intro' },
        { name: 'Becrux Bottom', url: '/bb-intro' },
        { name: 'Lesath Side', url: '/ls-intro' },
        { name: 'Lesath Bottom', url: '/lb-intro' },
        { name: 'Rigel Side', url: 'ss-intro' },
        { name: 'Rigel Bottom', url: 'sb-intro' }
      ]
    }
  ];
  // For Mini Apps Content
  public miniApps = [
    {
      category: 'News Apps',
      Number: 3,
      expand: false,
      subCat: [
        { name: 'News App 01', url: '/mini-news-one' },
        { name: 'News App 02', url: '/mini-news-two' },
        { name: 'News App 03', url: '/mini-news-three' },
      ]
    },
    {
      category: 'Ecommerce',
      Number: 11,
      expand: false,
      subCat: [
        { name: 'Ecommerce App 01', url: '/mini-lesath-home' },
        { name: 'Ecommerce App 02', url: '/mini-becrux-one-home' },
        { name: 'Ecommerce App 03', url: '/mini-becrux-two-home' },
        { name: 'Ecommerce App 04', url: '/mini-becrux-three-home' },
        { name: 'Ecommerce App 05', url: '/mini-becrux-four-home' },
        { name: 'Ecommerce App 06', url: '/mini-becrux-five-home' },
        { name: 'Ecommerce App 07', url: '/mini-becrux-six-home' },
        { name: 'Ecommerce App 08', url: '/mini-becrux-seven-home' },
        { name: 'Ecommerce App 09', url: '/mini-becrux-eight-home' },
        { name: 'Ecommerce App 10', url: '/mini-becrux-nine-home' },
        { name: 'Ecommerce App 11', url: '/mini-becrux-ten-home' },
      ]
    },
  ];
  // For UIUX Templates Content
  public scripts = [
    // For Social Logins
    {
      category: 'Social Login Integrations',
      Number: 5,
      url: '/social-login-integrations',
    },
    // For Push Notifications
    {
      category: 'Push Notification Integrations',
      Number: 2,
      url: '/push-notification-integrations',
    },
    // For Google Maps
    {
      category: 'Maps Integrations',
      Number: 2,
      url: '/maps-integration',
    },
    // For Admob API
    {
      category: 'Admob Integrations',
      Number: 4,
      url: '/admob-integrations',
    },
    // For Wordpress Feeds
    {
      category: 'Wordpress Feeds Integrations',
      Number: 1,
      url: '/wordpress-posts',
    },
    // For Youtube Chanels
    {
      category: 'Youtube Chanels Integrations',
      Number: 1,
      url: '/youtube-chanels',
    },
    // For Analytics
    {
      category: 'Analytics Integrations',
      Number: 3,
      url: '/analytics-integration',
    },
    // For Payment Gateways
    {
      category: 'Payment Gateways Integrations',
      Number: 6,
      url: '/payment-integration',
    },

    // For Cloud Storage
    {
      category: 'Cloud Storage Integrations',
      Number: 1,
      url: '/cloud-storage',
    },

    // For Woocomerce Rest Api
    {
      category: 'Woocomerce Rest Api Integrations',
      Number: 1,
      url: '/woocomerce',
    },

    // // For SMS Authentication
    // {
    //   category: 'SMS Authentication Integrations',
    //   Number: 0,
    //   bg_image: 'assets/images/plugin-images/Sms-authentication/SMS-Authentication.jpg',
    //   image: "assets/images/plugin-images/Sms-authentication/Sms-Authentication.png",
    //   url: '',
    //   bgOpacity: '0.77'
    // },


  ];

  // For Becrux Side Menu
  visibleHome = false;//for home expand
  public itemsHome: any = [];//home list
  visibleCategory = false;//for category expand
  public itemsCategory: any = [];//category list
  visibleShop = false;//for shop expand
  public itemsShop: any = [];//shop list

  // For Becrux SideMenu Items
  //home list
  public bs_Home = [
    {
      name: "Home-1",
      url: '/bs-home'
    },
    {
      name: "Home-2",
      url: '/bs-home2'
    },
    {
      name: "Home-3",
      url: '/bs-home3'
    },
    {
      name: "Home-4",
      url: '/bs-home4'
    },
    {
      name: "Home-5",
      url: '/bs-home5'
    },
    {
      name: "Home-6",
      url: '/bs-home6'
    },
    {
      name: "Home-7",
      url: '/bs-home7'
    },
    {
      name: "Home-8",
      url: '/bs-home8'
    },
    {
      name: "Home-9",
      url: '/bs-home9'
    },
    {
      name: "Home-10",
      url: '/bs-home10'
    },
  ];
  //For Category list
  public bs_Category = [
    {
      name: "Category-1",
      url: '/bs-categories'
    },
    {
      name: "Category-2",
      url: '/bs-categories2'
    },
    {
      name: "Category-3",
      url: '/bs-categories3'
    },
    {
      name: "Category-4",
      url: '/bs-categories4'
    },
    {
      name: "Category-5",
      url: '/bs-categories5'
    },
    {
      name: "Category-6",
      url: '/bs-categories6'
    },
  ];
  //For Shop list
  public bs_Shop = [
    {
      name: "Newest", url: '/bs-products'
    },
    {
      name: "On Sale", url: '/bs-products'
    },
    {
      name: "Featured", url: '/bs-products'
    },
  ];

  // For All pages
  bs_Pages = [
    {
      name: 'My Wish List',
      icon: 'heart',
      url: '/bs-wish-list'

    },
    {
      name: 'Edit Profile',
      icon: 'lock-closed',
      url: '/bs-my-account'

    },
    {
      name: 'Addresses',
      icon: 'home',
      url: '/bs-addresses'
    },
    {
      name: 'My Orders',
      icon: 'cart',
      url: '/bs-my-orders'
    },
    {
      name: 'Reward Points',
      icon: 'happy',
      url: '/bs-reward-points'

    },
    {
      name: 'Scratch Card',
      icon: 'notifications',
      url: '/bs-notifications'

    },
    {
      name: 'Contact Us',
      icon: 'call',
      url: '/bs-contact-us'
    },
    {
      name: 'About Us',
      icon: 'information-circle',
      url: '/bs-about-us'

    },
    {
      name: 'News',
      icon: 'newspaper-outline',
      url: '/bs-news'
    },
    {
      name: 'Intro',
      icon: 'logo-ionic',
      url: '/bs-intro'
    },
    {
      name: 'Share',
      icon: 'share'
    },
    {
      name: 'Rate Us',
      icon: 'star-half'
    },
    {
      name: 'Settings',
      icon: 'settings',
      url: '/bs-settings'
    },
    {
      name: 'Exit',
      icon: 'exit',
      url: '/ui-templates-details'
    },
  ]

  // For Lesath Side Menu
  visibleMyAccount = false;//for MyAccount expand
  visibleAboutUs = false;//for AboutUs expand
  public itemsMyAccount: any = [];//MyAccount list
  public itemsAboutUs: any = [];//AboutUs list

  public ls_Pages = [
    { name: "Contact Us", url: '/ls-contact-us' },
    { name: "Help & Suppor" },
    { name: "My Order", url: '/ls-my-order' },
    { name: "My Profile", url: '/ls-my-account' },
    { name: "Exit", url: '/ui-templates-details' },
  ];

  // For My account list
  public ls_myAccount = [
    {
      name: "Login", url: '/ls-sign-in'
    },
    {
      name: "Register", url: '/ls-sign-up'
    }
  ];
  // For About us list
  public ls_aboutUs = [
    { name: "Our Website" },
    { name: "Privacy Policy", url: '/ls-privacy-policy' },
    { name: "Refund Policy", url: '/ls-refund-policy' },
    { name: "Term & Services", url: '/ls-term-services' }
  ];

  // Constructor
  constructor(
    private theme: ThemeService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public modalCntrl: ModalController,
    public nav: NavController,
    private navCtrl: NavController,
    public statusbar: StatusBar,
    private elementRef: ElementRef,
    public toastCtrl: ToastController,
    public appEventsService: AppEventsService

  ) {
    //for status bar
    this.initializeApp();

    // For Becrux Bottom Tabs Handle
    // this.events.subscribe('b_bottom', (data) => {
    //   this.bb_visible = data;
    // });
    let b_bottom = this.appEventsService.subscribe("b_bottom");
    b_bottom.subscriptions.add(b_bottom.event.subscribe(data => {
      this.bb_visible = data;
    }));
    // For Lesath Bottom Tabs Handle
    // this.events.subscribe('l_bottom', (data) => {
    //   this.lb_visible = data;
    // });
    let l_bottom = this.appEventsService.subscribe("l_bottom");
    l_bottom.subscriptions.add(l_bottom.event.subscribe(data => {
      this.lb_visible = data;    }));
    // For Rigel Bottom Tabs Handle
    // this.events.subscribe('s_bottom', (data) => {
    //   this.sb_visible = data;
    // });
    let s_bottom = this.appEventsService.subscribe("s_bottom");
    s_bottom.subscriptions.add(s_bottom.event.subscribe(data => {
      this.sb_visible = data;
    }));
    //dark theme
    let darkTheme = this.appEventsService.subscribe("darkTheme");
    darkTheme.subscriptions.add(darkTheme.event.subscribe(data => {
      console.log("dark themmeeeeee", data);
      if(data==true)
        this.dark=true;
      else
      this.dark=false;
    }));
    this.itemsHome = [
      { expandedHome: false },
    ];
    this.itemsCategory = [
      { expandedcategory: false },
    ];
    this.itemsShop = [
      { expandedShop: false },
    ];

    // For Lesath Side Menu
    // For MyAccount not expand by default
    this.itemsMyAccount = [
      { expandedHelp: false },
    ];
    // For aboutUs not expand by default
    this.itemsAboutUs = [
      { expandedHelp: false },
    ];

    // For Expandable Screen Item
    this.itemsScreen = [
      { expandedHelp: false },
    ];
    ////////////////////////////////////
    this.itemColor = ["#F44336"];
    this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    // this.events.subscribe('icons', (data) => {
    // });
    let icons = this.appEventsService.subscribe("icons");
    icons.subscriptions.add(icons.event.subscribe(data => {
      this.iconColorVar = data;
      if (data == "autumn") {
        this.itemColor = ["#F44336"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "night") {
        this.itemColor = ["#673AB7"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "neon") {
        this.itemColor = ["#03A9F4"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "orginal") {
        this.itemColor = ["#4CAF50"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "red") {
        this.itemColor = ["#9E9E9E"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "purple") {
        this.itemColor = ["#E91E63"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightblue") {
        this.itemColor = ["#3F51B5"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightgreen") {
        this.itemColor = ["#00BCD4"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightgray") {
        this.itemColor = ["#8BC34A"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "blue") {
        this.itemColor = ["#008577"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
    }));
  }

  // For Ecommerce One Expandable Functions
  // For Home Expandable
  expandItemHome(item): void {
    this.visibleHome = !this.visibleHome;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsHome.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  // For Category expandable
  expandItemCategory(item): void {
    this.visibleCategory = !this.visibleCategory;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCategory.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //For Shop expandable
  expandItemShop(item): void {
    this.visibleShop = !this.visibleShop;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsShop.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  /////
  ngOnInit() {
    this.menuCtrl.enable(true, 'Menu2')
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
    });
  }

  // For Expandable Function
  expandItem(i, item): void {
    if (i == 0) {
      this.visibleHome = !this.visibleHome;
      if (item.expandedHome) {
        item.expandedHome = false;
      } else {
        this.itemsHome.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
    if (i == 1) {
      this.visibleCategory = !this.visibleCategory;
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.itemsCategory.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
    if (i == 2) {
      this.visibleShop = !this.visibleShop;
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.itemsShop.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
  }

  //////////////////
  homePage(i) {
    if (i == 0) {
      this.nav.navigateForward("ehome");
    }
    else if (i == 1) {
      this.nav.navigateForward("ehometwo");
    }
    else if (i == 2) {
      this.nav.navigateForward("ehomethree");
    }
    else if (i == 3) {
      this.nav.navigateForward("ehomefour");
    }
    else if (i == 4) {
      this.nav.navigateForward("ehomefive");
    }
  }

  categoryPage(i) {
    if (i == 0) {
      this.nav.navigateForward("ecategory");
    }
    else if (i == 1) {
      this.nav.navigateForward("ecategorytwo");
    }
    else if (i == 2) {
      this.nav.navigateForward("ecategorythree");
    }
    else if (i == 3) {
      this.nav.navigateForward("ecategoryfour");
    }
    else if (i == 4) {
      this.nav.navigateForward("ecategoryfive");
    }
    else if (i == 5) {
      this.nav.navigateForward("ecategorysix");
    }
  }

  shopPage(i) {
    if (i == 0) {
      this.nav.navigateForward("eshopnewest");
    }
    else if (i == 1) {
      this.nav.navigateForward("eshoptopseller");
    }
    else if (i == 2) {
      this.nav.navigateForward("eshopdeals");
    }
    else if (i == 3) {
      this.nav.navigateForward("eshopmostliked");
    }
  }

  // For Lesath Side Menu
  // For MyAccount expandable
  expandItemMyAccount(item): void {
    this.visibleMyAccount = !this.visibleMyAccount;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsMyAccount.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for About Us expandable
  expandItemAboutUs(item): void {
    this.visibleAboutUs = !this.visibleAboutUs;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsAboutUs.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
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

  // For Becrux Side Functions
  //navigate ot login page
  async goToLogin() {
    let modal = await this.modalCntrl.create({
      component: LoginPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  async goToLanguage() {
    let modal = await this.modalCntrl.create({
      component: LanguagePage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  async goToCurrencyListPage() {
    let modal = await this.modalCntrl.create({
      component: CurrencyListPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  goToColorPage() {
    this.navCtrl.navigateForward("color-theme");
  }
  goToLbHome() {
    this.navCtrl.navigateForward("lb-home");
  }
  goToLbWishlist() {
    this.navCtrl.navigateForward("lb-wishlist");
  }
  goToLbNews() {
    this.navCtrl.navigateForward("lb-news");
  }
  goToLbAccount() {
    this.navCtrl.navigateForward("lb-account-info");
  }
  goToBbHome() {
    this.navCtrl.navigateForward("bb-home");
  }
  goToBbProducts() {
    this.navCtrl.navigateForward("bb-products");
  }
  goToBbCategory() {
    this.navCtrl.navigateForward("bb-categories");
  }
  goToBbWishlist() {
    this.navCtrl.navigateForward("bb-wish-list");
  }
  goToBbNews() {
    this.navCtrl.navigateForward("bb-news");
  }
  goToBbContactUs() {
    this.navCtrl.navigateForward("bb-contact-us");
  }
  //For Rigel Side
  public divBlur = "blur(0px)";
  public visTab = true;
  public login = false;
  public visProfileItem = false;
  public visEditprofile = false;
  public listItems = [
    { icon: "assets/iconIShoe/home-side.svg", text: "Home", visItem: true },
    { icon: "assets/iconIShoe/listview-side.svg", text: "Categories", visItem: true },
    { icon: "assets/iconIShoe/heart.svg", text: "Wishlist", visItem: true },
    { icon: "assets/iconIShoe/about-us.svg", text: "About Us", visItem: true },
    { icon: "assets/iconIShoe/contact-us.svg", text: "Contact Us", visItem: true },
    { icon: "assets/iconIShoe/privacy.svg", text: "Privacy Policy", visItem: true },
    { icon: "assets/iconIShoe/refund.svg", text: "Refund Policy", visItem: true },
    { icon: "assets/iconIShoe/terms.svg", text: "Terms & Services", visItem: true },
    { icon: "assets/iconIShoe/share.svg", text: "Share", visItem: true },
    { icon: "assets/iconIShoe/rate-us.svg", text: "Rate Us", visItem: true },
    { icon: "assets/iconIShoe/settings.svg", text: "Settings", visItem: true },
    { icon: "assets/iconIShoe/newspaper.svg", text: "News", visItem: true },
    { icon: "assets/iconIShoe/account-user.svg", text: "Edit Profile", visItem: true },
    { icon: "assets/iconIShoe/account-order.svg", text: "My Order", visItem: true },
    { icon: "assets/iconIShoe/address.svg", text: "My Addresses", visItem: true },
    { icon: "assets/iconIShoe/reward-points.svg", text: "Reward Points", visItem: true },
    { icon: "assets/CustomIcons/exit.svg", text: "Exit", visItem: true },
  ];
  public listInputItems = [
    { placeHolder: "First Name:", type: "text" },
    { placeHolder: "Last Name:", type: "text" },
    { placeHolder: "Password:", type: "password" },
    { placeHolder: "Email:", type: "email" },
    { placeHolder: "Phone:", type: "tel" },
    { placeHolder: "City:", type: "text" },
  ];
  goToPage(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("ss-home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("ss-categories");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("ss-wishlist");
    }
    else if (i == 3) {
      // this.navCtrl.navigateForward("about-us");
      this.toastFun('ss-about-us');
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("ss-contact-us");
    }
    else if (i == 5) {
      // this.navCtrl.navigateForward("privary-policy");
      this.toastFun('ss-privacy-policy');
    }
    else if (i == 6) {
      // this.navCtrl.navigateForward("refund-policy");
      this.toastFun('ss-refund-policy');
    }
    else if (i == 7) {
      // this.navCtrl.navigateForward("term-services");
      this.toastFun('ss-term-services');
    }
    else if (i == 8) {
      // this.navCtrl.navigateForward("share");
      this.toastFun('ss-share');
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("ss-review");
    }
    else if (i == 10) {
      // this.navCtrl.navigateForward("settings");
      this.toastFun('ss-settings');
    }
    else if (i == 11) {
      // this.navCtrl.navigateForward("settings");
      this.navCtrl.navigateForward("ss-news");
    }
    else if (i == 12) {
      this.navCtrl.navigateForward("ss-my-account");
    }
    else if (i == 13) {
      this.navCtrl.navigateForward("ss-my-order");
    }
    else if (i == 14) {
      this.navCtrl.navigateForward("ss-my-addresses");
    }
    else if (i == 15) {
      this.navCtrl.navigateForward("ss-reward-points");
    }
    else if (i == 16) {
      this.navCtrl.navigateForward("ui-templates-details");
    }
  }
  async toastFun(val) {
    if (val == 'ss-about-us') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'About Us Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-privacy-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Privacy Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-refund-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Refund Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-term-services') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Term & Services Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-share') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Share Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-settings') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Settings Clicked',
        duration: 2000
      });
      toast.present();
    }
  }
  goToLoginSS() {
    this.navCtrl.navigateForward("ss-login");
  }
  //For Rigel Bottom
  goToSbHome() {
    this.navCtrl.navigateForward("sb-home");

  }
  goToSbWishlist() {
    this.navCtrl.navigateForward("sb-wishlist");
  }
  goToSbCategories() {
    this.navCtrl.navigateForward("sb-categories");
  }
  goToSbNews() {
    this.navCtrl.navigateForward("sb-news");
  }
  goToSbAccount() {
    this.navCtrl.navigateForward("sb-my-account");
  }
}
