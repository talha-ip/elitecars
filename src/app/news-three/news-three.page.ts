import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-three',
  templateUrl: './news-three.page.html',
  styleUrls: ['./news-three.page.scss'],
})
export class NewsThreePage implements OnInit {
  items = [
    { img: "assets/images/news-blog-one/1.png", headerText: "New Fashion Trends in 2020", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis turpis eu consectetur pretium. Nullam tempor posuere sollicitudin. Pellentesque turpis" },
    { img: "assets/images/news-blog-one/2.png", headerText: "Best Books To Read For Bloggers", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis turpis eu consectetur pretium. Nullam tempor posuere sollicitudin. Pellentesque turpis" },
    { img: "assets/images/news-blog-one/3.png", headerText: "The Transformation of Designing Trends", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis turpis eu consectetur pretium. Nullam tempor posuere sollicitudin. Pellentesque turpis" },
    { img: "assets/images/news-blog-one/4.png", headerText: "Women Party Shoes in New Styles", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis turpis eu consectetur pretium. Nullam tempor posuere sollicitudin. Pellentesque turpis" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
