import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentIntegrationPage } from './payment-integration.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentIntegrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentIntegrationPage]
})
export class PaymentIntegrationPageModule {}
