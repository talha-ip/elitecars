import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YoutubeChanelsPage } from './youtube-chanels.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeChanelsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YoutubeChanelsPage]
})
export class YoutubeChanelsPageModule {}
