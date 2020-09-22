import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThankyouOnePage } from './thankyou-one.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThankyouOnePage]
})
export class ThankyouOnePageModule {}
