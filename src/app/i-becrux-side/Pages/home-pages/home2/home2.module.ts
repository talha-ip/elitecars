import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../../components/share/share.module'; 
import { Home2Page } from './home2.page';

const routes: Routes = [
  {
    path: '',
    component: Home2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ShareModule
  ],
  declarations: [Home2Page]
})
export class Home2PageModule {}
