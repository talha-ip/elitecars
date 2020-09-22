import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaystackMethodPage } from './paystack-method.page';

const routes: Routes = [
  {
    path: '',
    component: PaystackMethodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaystackMethodPage]
})
export class PaystackMethodPageModule {}
