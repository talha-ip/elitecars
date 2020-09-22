import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgetElevenPage } from './forget-eleven.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetElevenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgetElevenPage]
})
export class ForgetElevenPageModule {}
