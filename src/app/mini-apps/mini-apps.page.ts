import { Component, OnInit, ElementRef } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { NavController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { AppEventsService }  from '../services/app-events.service'
import { from } from 'rxjs';
const themes = {
  //red color o.k
  autumn: {
    primary: '#F44336',
    secondary: '#F44336',
    tertiary: 'white',
    light: '#F44336',
    dark: 'black',
    medium: '#F44336',
  },
  //purple color o.k
  night: {
    primary: '#673AB7',
    secondary: '#673AB7',
    tertiary: '#673AB7',
    medium: '#673AB7',
    dark: 'black',
    light: '#673AB7'
  },
  //blue color o.k
  neon: {
    primary: '#03A9F4',//bold text
    secondary: '#03A9F4',
    tertiary: '#03A9F4',
    light: '#03A9F4',
    dark: 'black',
    medium: '#03A9F4',
  },
  //green color o.k
  orginal: {
    primary: '#4CAF50',
    secondary: '#4CAF50',
    tertiary: '#4CAF50',
    light: '#4CAF50',
    medium: '#4CAF50',
    dark: 'black'
  },
  //gray color o.k
  red: {
    primary: '#9E9E9E',
    secondary: '#9E9E9E',
    tertiary: '#9E9E9E',
    light: '#9E9E9E',//background
    medium: '#9E9E9E',//all btn color
    dark: 'black',//text color
    warning: '#9E9E9E',
  },
  //sharp pink color o.k
  purple: {
    primary: '#E91E63',
    secondary: '#E91E63',
    tertiary: '#E91E63',
    light: '#E91E63',//background
    medium: '#E91E63',//all btn color
    dark: 'black',//text color
    warning: '#E91E63',
  },
  //dark blue color o.k
  Lightblue: {
    primary: '#3F51B5',
    secondary: '#3F51B5',
    tertiary: '#3F51B5',
    light: '#3F51B5',//background
    medium: '#3F51B5',//all btn color
    dark: 'black',//text color
    warning: '#3F51B5',
  },
  //light blue color o.k
  Lightgreen: {
    primary: '#00BCD4',
    secondary: '#00BCD4',
    tertiary: '#00BCD4',
    light: '#00BCD4',//background
    medium: '#00BCD4',//all btn color
    dark: 'black',//text color
    warning: '#00BCD4',
  },
  //light green color o.k
  Lightgray: {
    primary: '#8BC34A',
    secondary: '#8BC34A',
    tertiary: '#8BC34A',
    light: '#8BC34A',//background
    medium: '#8BC34A',//all btn color
    dark: 'black',//text color
    warning: '#8BC34A',
  },
  //dark green color o.k
  blue: {
    primary: '#008577',
    secondary: '#008577',
    tertiary: '#008577',
    light: '#008577',//background
    medium: '#008577',//all btn color
    dark: 'black',//text color
    warning: '#008577',
  }
};
@Component({
  selector: 'app-mini-apps',
  templateUrl: './mini-apps.page.html',
  styleUrls: ['./mini-apps.page.scss'],
})
export class MiniAppsPage implements OnInit {
  visiableBtnAutum = false;
  visiableBtnNight = false;
  visiableBtnNeon = false;
  visiableBtnOriginal = false;
  visiableBtnRed = false;
  visiableBtnPurple = false;
  visiableBtnLightblue = false;
  visiableBtnLightgreen = false;
  visiableBtnLightgray = false;
  visiableBtnBlue = false;
  visiableBtn = false;
  public itemColor = "";
  // For Theme Apply Using NgStyle
  public itemColor2 = [];
  public iconColorVar = "";
  //For the selection of colors from service
  data: any;
  //for displaying component names and there items name with images
  mainArr = [
    {
      category: 'News',
      Number: 3,
      products: [
        // News One 
        {
          image: "assets/images/mini-apps/news/news-text-one.png",
          //image_bg: "assets/images/mini-apps/news/news-bg.jpg",
          url: "/mini-news-one"
        },
        // News Two 
        {
          image: "assets/images/mini-apps/news/news-text-two.png",
          //image_bg: "assets/images/mini-apps/news/news-bg.jpg",
          url: "/mini-news-two"
        },
        // News Three
        {
          image: "assets/images/mini-apps/news/news-text-three.png",
          //image_bg: "assets/images/mini-apps/news/news-bg.jpg",
          url: "/mini-news-three"
        },
      ]
    },
    {
      category: 'Ecommerce',
      Number: 11,
      products: [
        // Ecom One (lesath) 
        {
          image: "assets/images/mini-apps/ecommerce/e1.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-lesath-home"
        },
        // Ecom Two (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e2.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-one-home"
        },
        // Ecom Three (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e3.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-two-home"
        },
        // Ecom Four (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e4.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-three-home"
        },
        // Ecom Five (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e5.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-four-home"
        },
        // Ecom Six (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e6.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-five-home"
        },
        // Ecom Seven (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e7.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-six-home"
        },
        // Ecom Eight (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e8.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-seven-home"
        },
        // Ecom Nine (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e9.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-eight-home"
        },
        // Ecom Ten (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e10.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-nine-home"
        },
        // Ecom Eleven (becrux)
        {
          image: "assets/images/mini-apps/ecommerce/e11.png",
          //image_bg: "assets/images/mini-apps/ecommerce/ecommerce-bg.jpg",
          url: "/mini-becrux-ten-home"
        },
      ]
    }
  ];

  constructor(private appEventsService: AppEventsService, private elementRef: ElementRef, private service: CustomThemeService, public theme: ThemeService, private navCtrl: NavController) {
    this.itemColor2 = ["#F44336"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "autumn")//if selected color is red 
    {
      this.itemColor2 = ["#F44336"];
    }
    else if (this.data == "night")//if selected color is purple 
    {
      this.itemColor2 = ["#673AB7"];
    }
    else if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor2 = ["#03A9F4"];
    }
    else if (this.data == "orginal")//if selected color is green
    {
      this.itemColor2 = ["#4CAF50"];
    }
    else if (this.data == "red")//if selected color is gray
    {
      this.itemColor2 = ["#9E9E9E"];
    }
    else if (this.data == "purple")//if selected color is sharp pink
    {
      this.itemColor2 = ["#E91E63"];
    }
    else if (this.data == "Lightblue")//if selected color is dark blue
    {
      this.itemColor2 = ["#3F51B5"];
    }
    else if (this.data == "Lightgreen")//if selected color is light blue
    {
      this.itemColor2 = ["#00BCD4"];
    }
    else if (this.data == "Lightgray")//if selected color is light green
    {
      this.itemColor2 = ["#8BC34A"];
    }
    else if (this.data == "blue")//if selected color is dark green 
    {
      this.itemColor2 = ["#008577"];
    }

  }
  ionViewWillEnter() {
    this.theme.getTheme().then((result) => {
      let val = result;
      this.changeTheme(val);
    });
  }
  ////////////////////////////////
  changeTheme(name) {
    this.theme.setTheme(themes[name], name);
    this.service.setTheme(name);
    this.appEventsService.publish('icons', name);
    if (name == 'autumn') {
      this.itemColor = "#F44336";//red
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = true;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'night') {
      this.itemColor = "#673AB7";//purple
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = true;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'neon') {
      this.itemColor = "#03A9F4";//blue
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = true;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'orginal') {
      this.itemColor = "#4CAF50";//green
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = true;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'red') {
      this.itemColor = "#9E9E9E";//gray
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = true;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'purple') {
      this.itemColor = "#E91E63";//sharp pink
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = true;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'Lightblue') {
      this.itemColor = "#3F51B5";//dark blue
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = true;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'Lightgreen') {
      this.itemColor = "#00BCD4";//light blue
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = true;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = false;
    }
    else if (name == 'Lightgray') {
      this.itemColor = "#8BC34A";//light green
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = true;
      this.visiableBtnBlue = false;
    }
    else if (name == 'blue') {
      this.itemColor = "#008577";//dark green
      this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      this.visiableBtnAutum = false;
      this.visiableBtnNight = false;
      this.visiableBtnNeon = false;
      this.visiableBtnOriginal = false;
      this.visiableBtnRed = false;
      this.visiableBtnPurple = false;
      this.visiableBtnLightblue = false;
      this.visiableBtnLightgreen = false;
      this.visiableBtnLightgray = false;
      this.visiableBtnBlue = true;
    }
  }
  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateForward("home");
  }
}
