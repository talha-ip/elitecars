import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiniNewsDetailTwoPage } from './mini-news-detail-two.page';

const routes: Routes = [
  {
    path: '',
    component: MiniNewsDetailTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiniNewsDetailTwoPage]
})
export class MiniNewsDetailTwoPageModule {}
