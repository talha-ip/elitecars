import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.page.html',
  styleUrls: ['./news-one.page.scss'],
})
export class NewsOnePage implements OnInit {
  public latestItems = [
    { img: "assets/images/news-blog-one/1.png", header: "New Fashion Trends of 2020", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/1.png" },
    { img: "assets/images/news-blog-one/3.png", header: "The Transformation of Designing Trends 2020", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/2.png" },
  ];
  public trendingItems = [
    { img: "assets/images/news-blog-one/5.png", header: "New Fashion Trends of 2020 For Men", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/3.png" },
    { img: "assets/images/news-blog-one/4.png", header: "Women Party Shoes Will Be The Next New Thing!", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/4.png" },
    { img: "assets/images/news-blog-one/2.png", header: "Best Books To Read For Fashion Bloggers", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/5.png" },
  ];
  public allItems = [
    { img: "assets/images/news-blog-one/4.png", header: "Women Party Shoes Will Be The Next New Thing!", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/3.png" },
    { img: "assets/images/news-blog-one/1.png", header: "New Fashion Trends of 2020", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/4.png" },
    { img: "assets/images/news-blog-one/3.png", header: "The Transformation of Designing Trends 2020", publisherName: "by Publisher Name", postTime: "Posted 30 minutes ago", avatarImg: "assets/images/news-blog-one/avatar/5.png" },
  ];
  sliderConfiglatestItems = {
    slidesPerView: 1.5,
    spaceBetween: 12,
  };
  sliderConfigTrendingItems={
    slidesPerView: 2.5,
    spaceBetween: 12,
  }
  constructor() { }

  ngOnInit() {
  }

}
