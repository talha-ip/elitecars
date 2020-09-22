import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';


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
    { img: "assets/template-themes/lesath/images/news-categories/1.jpg", heading:"News", count:"5" },
    { img: "assets/template-themes/lesath/images/news-categories/2.jpg", heading:"Promotion", count:"10" },
    { img: "assets/template-themes/lesath/images/news-categories/3.jpg", heading:"Deals", count:"7" },
    { img: "assets/template-themes/lesath/images/news-categories/4.jpg", heading:"App Features", count:"12" },
  ]
  constructor(public nav: NavController, public appEventsService: AppEventsService) { }

  ngOnInit() {
  }
  dismiss() {
    this.nav.navigateForward('lb-home');
  }
  goToNewsDetail(){
    this.nav.navigateForward('lb-news-detail');
  }
  goToSearch() {
    this.nav.navigateForward('lb-search');
  }

  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
