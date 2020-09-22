import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WordpressPostsPage } from './wordpress-posts.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressPostsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WordpressPostsPage]
})
export class WordpressPostsPageModule {}
