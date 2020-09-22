import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UiTemplatesDetailsPage } from './ui-templates-details.page';

const routes: Routes = [
  {
    path: '',
    component: UiTemplatesDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UiTemplatesDetailsPage]
})
export class UiTemplatesDetailsPageModule {}
