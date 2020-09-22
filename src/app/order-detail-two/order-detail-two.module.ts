import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderDetailTwoPage } from './order-detail-two.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderDetailTwoPage]
})
export class OrderDetailTwoPageModule {}
