import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { CustomThemeService } from 'src/app/services/custom-theme.service';

@Component({
  selector: 'app-youtube-chanels',
  templateUrl: './youtube-chanels.page.html',
  styleUrls: ['./youtube-chanels.page.scss'],
})
export class YoutubeChanelsPage implements OnInit {

  url: 'https://www.googleapis.com/youtube/v3/playlists?key=';
  apiKey: 'AIzaSyCQzYfK8_FKMM-5ObXQyohd11mQk_E52P4';
  channelId = 'UCTtKz-FOBmy5Fq5ZXdXUGeA';

  playLists: any[];
  visItems = true;
  constructor(public youtube: YoutubeVideoPlayer, public alertController: AlertController,
    public nav: NavController, public service: CustomThemeService, public http: HTTP) {

  }

  ngOnInit() {
  }

  getPlaylistsForChannel(channel) {
    console.log("Channel");
    console.log(channel);
    this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCQzYfK8_FKMM-5ObXQyohd11mQk_E52P4' + '&channelId=' + channel + '&part=snippet,id&maxResults=20', {}, {})
      .then(data => {
        let d = JSON.parse(data.data);
        console.log("Chanel Playlists DATA.DATA");
        console.log(d.items);
        this.visItems = false;
        this.playLists = d.items;
      },
        error => {
          console.log("Error");
          console.log(error);
          this.Alert()
        })
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'No Playlists found for that Channel ID',
      buttons: ['OK']
    });
    await alert.present();
  }

  getListVideos(list) {
    this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyCQzYfK8_FKMM-5ObXQyohd11mQk_E52P4' + '&playlistId=' + list.id + '&part=snippet,id&maxResults=20', {}, {})
      .then(data => {
        let d = JSON.parse(data.data);
        console.log("Specific Playlist Videos");
        console.log(d.items);
        this.service.setYouTubeData(d.items);
        this.nav.navigateForward('youtube-chanels-playlists');
      },
        error => {
          console.log("Error");
          console.log(error);
        })
  }
}
