import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PushNotificationIntegrationsPage } from './push-notification-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: PushNotificationIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PushNotificationIntegrationsPage]
})
export class PushNotificationIntegrationsPageModule {}
