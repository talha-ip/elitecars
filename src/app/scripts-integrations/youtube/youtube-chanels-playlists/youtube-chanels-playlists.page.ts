import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CustomThemeService } from 'src/app/services/custom-theme.service';

@Component({
  selector: 'app-youtube-chanels-playlists',
  templateUrl: './youtube-chanels-playlists.page.html',
  styleUrls: ['./youtube-chanels-playlists.page.scss'],
})
export class YoutubeChanelsPlaylistsPage implements OnInit {

  videos: any[];
  constructor(public service: CustomThemeService, private plt: Platform, private youtube: YoutubeVideoPlayer) {
    this.videos = this.service.getYouTubeData();
    console.log("Youtube Playlists Videos")
    console.log(this.videos);
  }

  ngOnInit() {
  }

  openVideo(video) {
    if (this.plt.is('cordova')) {
      console.log("In IF");
      this.youtube.openVideo(video.snippet.resourceId.videoId);
    } else {
      console.log("In Else");
      window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    }
  }
}
