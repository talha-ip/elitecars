import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HereMapIntegrationsPage } from './here-map-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: HereMapIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HereMapIntegrationsPage]
})
export class HereMapIntegrationsPageModule {}
