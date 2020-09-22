import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MiniNewsTwoPage } from './mini-news-two.page';

const routes: Routes = [
  {
    path: '',
    component: MiniNewsTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MiniNewsTwoPage]
})
export class MiniNewsTwoPageModule {}
