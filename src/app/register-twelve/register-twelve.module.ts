import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterTwelvePage } from './register-twelve.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterTwelvePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterTwelvePage]
})
export class RegisterTwelvePageModule {}
