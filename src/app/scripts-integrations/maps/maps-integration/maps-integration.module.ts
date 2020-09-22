import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MapsIntegrationPage } from './maps-integration.page';

const routes: Routes = [
  {
    path: '',
    component: MapsIntegrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapsIntegrationPage]
})
export class MapsIntegrationPageModule {}
