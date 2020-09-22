import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiniNewsDetailOnePage } from './mini-news-detail-one.page';

const routes: Routes = [
  {
    path: '',
    component: MiniNewsDetailOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiniNewsDetailOnePage]
})
export class MiniNewsDetailOnePageModule {}
