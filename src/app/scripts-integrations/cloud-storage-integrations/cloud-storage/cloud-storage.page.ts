import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DropboxService } from '../dropbox.service';

@Component({
  selector: 'app-cloud-storage',
  templateUrl: './cloud-storage.page.html',
  styleUrls: ['./cloud-storage.page.scss'],
})
export class CloudStoragePage implements OnInit {

  constructor(public dropbox: DropboxService, private nav: NavController) { }

  ngOnInit() {
  }

  dropBox() {
    this.dropbox.login().then((success) => {
      console.log("Success");
      console.log(success);
      this.nav.navigateForward('dropbox-integrationn');
    }, (err) => {
      console.log(err);
    });
  }
}
