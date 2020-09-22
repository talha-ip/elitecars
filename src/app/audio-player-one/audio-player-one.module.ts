import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioPlayerOnePage } from './audio-player-one.page';

const routes: Routes = [
  {
    path: '',
    component: AudioPlayerOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AudioPlayerOnePage]
})
export class AudioPlayerOnePageModule {}
