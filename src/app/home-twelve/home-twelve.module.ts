import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeTwelvePage } from './home-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTwelvePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTwelvePage]
})
export class HomeTwelvePageModule {}
