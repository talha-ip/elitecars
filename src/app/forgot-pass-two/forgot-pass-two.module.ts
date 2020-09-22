import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotPassTwoPage } from './forgot-pass-two.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPassTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotPassTwoPage]
})
export class ForgotPassTwoPageModule {}
