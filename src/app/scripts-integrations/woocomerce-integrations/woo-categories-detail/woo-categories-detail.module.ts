import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WooCategoriesDetailPage } from './woo-categories-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WooCategoriesDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WooCategoriesDetailPage]
})
export class WooCategoriesDetailPageModule {}
