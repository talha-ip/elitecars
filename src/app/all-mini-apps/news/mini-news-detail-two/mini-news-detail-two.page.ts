import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../../../services/custom-theme.service';

@Component({
  selector: 'app-mini-news-detail-two',
  templateUrl: './mini-news-detail-two.page.html',
  styleUrls: ['./mini-news-detail-two.page.scss'],
})
export class MiniNewsDetailTwoPage implements OnInit {
  item: any = []
  constructor(public service: CustomThemeService) {
    this.item = this.service.getData();
    console.log("Wordpress Post Details")
    console.log(this.item);
  }
  ngOnInit() {
  }
}
