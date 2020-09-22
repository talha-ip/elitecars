import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GoogleMapIntegrationsPage } from './google-map-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoogleMapIntegrationsPage]
})
export class GoogleMapIntegrationsPageModule {}
