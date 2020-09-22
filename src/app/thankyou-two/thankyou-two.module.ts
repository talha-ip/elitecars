import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThankyouTwoPage } from './thankyou-two.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThankyouTwoPage]
})
export class ThankyouTwoPageModule {}
