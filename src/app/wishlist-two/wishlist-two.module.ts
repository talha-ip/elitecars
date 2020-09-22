import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WishlistTwoPage } from './wishlist-two.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WishlistTwoPage]
})
export class WishlistTwoPageModule {}
