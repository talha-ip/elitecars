import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeSevenPage } from './home-seven.page';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module';

const routes: Routes = [
  {
    path: '',
    component: HomeSevenPage
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
  declarations: [HomeSevenPage]
})
export class HomeSevenPageModule {}
