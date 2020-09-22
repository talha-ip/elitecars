import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.page.html',
  styleUrls: ['./slider-two.page.scss'],
})
export class SliderTwoPage  {
  items = [
    "assets/images/slider/slider1/1.png",
    "assets/images/slider/slider1/2.png",
    "assets/images/slider/slider1/3.png",
    "assets/images/slider/slider1/4.png",
    "assets/images/slider/slider1/5.png",
  ];
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
}
