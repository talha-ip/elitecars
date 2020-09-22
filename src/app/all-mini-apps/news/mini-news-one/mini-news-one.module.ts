import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiniNewsOnePage } from './mini-news-one.page';

const routes: Routes = [
  {
    path: '',
    component: MiniNewsOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiniNewsOnePage]
})
export class MiniNewsOnePageModule {}
