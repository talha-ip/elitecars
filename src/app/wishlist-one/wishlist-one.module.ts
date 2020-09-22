import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WishlistOnePage } from './wishlist-one.page';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module';


const routes: Routes = [
  {
    path: '',
    component: WishlistOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WishlistOnePage]
})
export class WishlistOnePageModule {}
