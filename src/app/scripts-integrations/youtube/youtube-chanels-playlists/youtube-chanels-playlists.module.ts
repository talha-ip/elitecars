import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { YoutubeChanelsPlaylistsPage } from './youtube-chanels-playlists.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubeChanelsPlaylistsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YoutubeChanelsPlaylistsPage]
})
export class YoutubeChanelsPlaylistsPageModule {}
