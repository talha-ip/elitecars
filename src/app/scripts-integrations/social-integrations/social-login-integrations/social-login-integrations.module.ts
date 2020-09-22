import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SocialLoginIntegrationsPage } from './social-login-integrations.page';

const routes: Routes = [
  {
    path: '',
    component: SocialLoginIntegrationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SocialLoginIntegrationsPage]
})
export class SocialLoginIntegrationsPageModule {}
