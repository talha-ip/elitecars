import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeFivePage } from './home-five.page';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module';

const routes: Routes = [
  {
    path: '',
    component: HomeFivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeFivePage]
})
export class HomeFivePageModule {}
