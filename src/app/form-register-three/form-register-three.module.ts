import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormRegisterThreePage } from './form-register-three.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormRegisterThreePage]
})
export class FormRegisterThreePageModule {}
