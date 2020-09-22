import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPage } from './product-detail.page';
import { ShareModule } from '../../components/share/share.module';
import { PipesModule } from '../../pipes/pipes.module';
const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShareModule,
    PipesModule
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
