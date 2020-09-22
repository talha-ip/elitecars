import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThankyouFivePage } from './thankyou-five.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThankyouFivePage]
})
export class ThankyouFivePageModule {}
