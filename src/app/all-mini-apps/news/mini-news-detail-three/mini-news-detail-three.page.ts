import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../../../services/custom-theme.service';

@Component({
  selector: 'app-mini-news-detail-three',
  templateUrl: './mini-news-detail-three.page.html',
  styleUrls: ['./mini-news-detail-three.page.scss'],
})
export class MiniNewsDetailThreePage implements OnInit {
  item: any = []
  constructor(public service: CustomThemeService) {
    this.item = this.service.getData();
    console.log("Wordpress Post Details")
    console.log(this.item);
  }
  ngOnInit() {
  }
}