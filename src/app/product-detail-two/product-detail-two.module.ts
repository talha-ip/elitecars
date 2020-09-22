import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailTwoPage } from './product-detail-two.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailTwoPage]
})
export class ProductDetailTwoPageModule {}
