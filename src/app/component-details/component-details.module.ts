import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module'
import { ComponentDetailsPage  } from './component-details.page';
const routes: Routes = [
  {
    path: '',
    component: ComponentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentDetailsPage]
})
export class ComponentDetailsPageModule {}
