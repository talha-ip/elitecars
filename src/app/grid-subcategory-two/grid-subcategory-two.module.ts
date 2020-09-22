import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridSubcategoryTwoPage } from './grid-subcategory-two.page';

const routes: Routes = [
  {
    path: '',
    component: GridSubcategoryTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridSubcategoryTwoPage]
})
export class GridSubcategoryTwoPageModule {}
