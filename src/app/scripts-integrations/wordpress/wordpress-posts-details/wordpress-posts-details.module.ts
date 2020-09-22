import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WordpressPostsDetailsPage } from './wordpress-posts-details.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressPostsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WordpressPostsDetailsPage]
})
export class WordpressPostsDetailsPageModule {}
