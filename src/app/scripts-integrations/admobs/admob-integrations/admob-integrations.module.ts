import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmobIntegrationsPage } from './admob-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: AdmobIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmobIntegrationsPage]
})
export class AdmobIntegrationsPageModule {}
