import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SmsApiIntegrationsPage } from './sms-api-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: SmsApiIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SmsApiIntegrationsPage]
})
export class SmsApiIntegrationsPageModule {}
