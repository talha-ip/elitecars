import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from 'src/app/services/custom-theme.service';

@Component({
  selector: 'app-wordpress-posts-details',
  templateUrl: './wordpress-posts-details.page.html',
  styleUrls: ['./wordpress-posts-details.page.scss'],
})
export class WordpressPostsDetailsPage implements OnInit {

  item: any = []
  constructor(public service: CustomThemeService) {
    this.item = this.service.getData();
    console.log("Wordpress Post Details")
    console.log(this.item);
  }

  ngOnInit() {
  }

}
