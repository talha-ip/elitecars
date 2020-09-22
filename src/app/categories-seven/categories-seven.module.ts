import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CategoriesSevenPage } from './categories-seven.page';
import { ShareModule } from '../i-rigel-side/components/share/share.module'
const routes: Routes = [
  {
    path: '',
    component: CategoriesSevenPage
  }
];

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesSevenPage]
})
export class CategoriesSevenPageModule {}
