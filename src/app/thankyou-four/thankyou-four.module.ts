import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThankyouFourPage } from './thankyou-four.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThankyouFourPage]
})
export class ThankyouFourPageModule {}
