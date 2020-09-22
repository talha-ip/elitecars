import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AudioPlayerTwoPage } from './audio-player-two.page';

const routes: Routes = [
  {
    path: '',
    component: AudioPlayerTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AudioPlayerTwoPage]
})
export class AudioPlayerTwoPageModule {}
