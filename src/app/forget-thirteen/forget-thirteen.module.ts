import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgetThirteenPage } from './forget-thirteen.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetThirteenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgetThirteenPage]
})
export class ForgetThirteenPageModule {}
