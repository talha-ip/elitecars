import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RazorpayMethodPage } from './razorpay-method.page';

const routes: Routes = [
  {
    path: '',
    component: RazorpayMethodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RazorpayMethodPage]
})
export class RazorpayMethodPageModule {}
