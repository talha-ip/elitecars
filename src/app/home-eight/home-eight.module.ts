import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module';

import { HomeEightPage } from './home-eight.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: HomeEightPage
  }
];

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeEightPage]
})
export class HomeEightPageModule {}
