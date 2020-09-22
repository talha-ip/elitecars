import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificationSevenPage } from './verification-seven.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationSevenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificationSevenPage]
})
export class VerificationSevenPageModule {}
