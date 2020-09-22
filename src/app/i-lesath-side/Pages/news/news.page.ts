import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  segments: any = 'latest';//main segment
  items = [
    {
      img: "assets/template-themes/lesath/images/news/1.jpg", date: "11-July-2019",
      heading: "Best Winter Wear for Men", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non neque ac tortor porta auctor. Mauris sed mi ornare, molestie dui ut, dignissim sem. Sed quis elit mauris. Aliquam bibendum dolor ex...…"
    },
    {
      img: "assets/template-themes/lesath/images/news/3.jpg", date: "08-August-2019",
      heading: "The Latest Trends In Fashion", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non neque ac tortor porta auctor. Mauris sed mi ornare, molestie dui ut, dignissim sem. Sed quis elit mauris. Aliquam bibendum dolor ex...…"
    },
    {
      img: "assets/template-themes/lesath/images/news/2.jpg", date: "14-June-2019",
      heading: "New Men Watches In Store", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non neque ac tortor porta auctor. Mauris sed mi ornare, molestie dui ut, dignissim sem. Sed quis elit mauris. Aliquam bibendum dolor ex...…"
    },
  ];
  itemsCategories = [
    { img: "assets/template-themes/lesath/images/news-categories/1.png", heading: "News", count: "5" },
    { img: "assets//lesath/images/news-categories/2.png", heading: "Promotion", count: "10" },
    { img: "assets/template-themes/lesath/images/news-categories/3.png", heading: "Deals", count: "7" },
    { img: "assets/template-themes/lesath/images/news-categories/4.png", heading: "App Features", count: "12" },
  ]
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }
  dismiss() {
    this.nav.navigateForward('ls-home');
  }
  goToNewsDetail() {
    this.nav.navigateForward('ls-news-detail');
  }
  goToSearch() {
    this.nav.navigateForward('ls-search');
  }
  goToCart() {
    this.nav.navigateForward('ls-cart');
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(true, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
  }
}
