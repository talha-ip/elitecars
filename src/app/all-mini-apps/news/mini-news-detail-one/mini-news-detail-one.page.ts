import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../../../services/custom-theme.service';

@Component({
  selector: 'app-mini-news-detail-one',
  templateUrl: './mini-news-detail-one.page.html',
  styleUrls: ['./mini-news-detail-one.page.scss'],
})
export class MiniNewsDetailOnePage implements OnInit {
  item: any = []
  constructor(public service: CustomThemeService) {
    this.item = this.service.getData();
    console.log("Wordpress Post Details")
    console.log(this.item);
  }
  ngOnInit() {
  }
}
