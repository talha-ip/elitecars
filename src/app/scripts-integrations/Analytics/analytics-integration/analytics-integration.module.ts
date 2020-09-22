import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalyticsIntegrationPage } from './analytics-integration.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsIntegrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalyticsIntegrationPage]
})
export class AnalyticsIntegrationPageModule {}
