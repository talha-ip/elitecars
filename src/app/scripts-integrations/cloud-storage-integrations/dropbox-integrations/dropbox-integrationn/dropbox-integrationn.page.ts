import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { DropboxService } from '../../dropbox.service';
@Component({
  selector: 'app-dropbox-integrationn',
  templateUrl: './dropbox-integrationn.page.html',
  styleUrls: ['./dropbox-integrationn.page.scss'],
})
export class DropboxIntegrationnPage implements OnInit {

  imageURI: any;
  depth: number = 0;
  folders: any;

  visItems = true;

  constructor(private camera: Camera, public actionSheetController: ActionSheetController, public navCtrl: NavController, public dropbox: DropboxService, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
  }

  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Albums',
  //     buttons: [{
  //       text: 'Camera',
  //       role: 'Camera',
  //       icon: 'camera',
  //       handler: () => {
  //         this.uploadCamera()
  //       }
  //     }, {
  //       text: 'Files',
  //       icon: 'browsers',
  //       handler: () => {
  //         this.uploadFile();
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();
  // }

  async ionViewWillEnter() {
    console.log("innnnn")
    this.folders = [];

    const loading = await this.loadingCtrl.create({
      message: 'Syncing from Dropbox...',
    });
    await loading.present();


    this.dropbox.getFolders().subscribe(data => {
      this.visItems = false;
      console.log("Data Folders");
      console.log(data);
      this.folders = data.entries;
      loading.dismiss();
    }, (err) => {
      console.log(err);
    });

  }

  async openFolder(path) {
    let loading = await this.loadingCtrl.create({
      message: 'Syncing from Dropbox...'
    });

    loading.present();

    this.dropbox.getFolders(path).subscribe(async data => {
      this.folders = data.entries;
      this.depth++;
      await loading.dismiss();
    }, err => {
      console.log(err);
    });
  }

  async goBack() {
    const loading = await this.loadingCtrl.create({
      message: 'Syncing from Dropbox...'
    });

    loading.present();

    this.dropbox.goBackFolder().subscribe(async data => {
      this.folders = data.entries;
      this.depth--;
      await loading.dismiss();
    }, err => {
      console.log(err);
    });
  }

  // Open Camera 
  // uploadCamera() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):

  //     console.log("Image Camera");
  //     console.log(imageData)
  //     this.dropbox.uploadFile(imageData);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // For Browser Files from Photo Library
  uploadFile() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      console.log("Image Data");
      console.log(this.imageURI)
      this.dropbox.uploadFile(this.imageURI);
    }, (err) => {
      console.log(err);
    });
  }
}
