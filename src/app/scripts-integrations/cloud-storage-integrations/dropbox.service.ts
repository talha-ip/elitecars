import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  accessToken: any;
  folderHistory: any = [];
  appKey: any;
  redirectURI: any;
  url: any;

  constructor(private transfer: FileTransfer, public http: Http, public iab: InAppBrowser) {

    //OAuth
    this.appKey = 'qp9obnew7pmp71n';
    this.redirectURI = 'http://localhost';
    this.url = '' + this.appKey + '&redirect_uri=' + this.redirectURI + '&response_type=token';
  }

  login() {

    return new Promise((resolve, reject) => {

      let browser = this.iab.create(this.url, '_blank');

      let listener = browser.on('loadstart').subscribe((event: any) => {

        //Ignore the dropbox authorize screen
        if (event.url.indexOf('oauth2/authorize') > -1) {
          return;
        }

        //Check the redirect uri
        if (event.url.indexOf(this.redirectURI) > -1) {
          listener.unsubscribe();
          browser.close();
          let token = event.url.split('=')[1].split('&')[0];
          this.accessToken = token;
          resolve(event.url);
        } else {
          reject("Could not authenticate");
        }

      });

    });

  }

  getUserInfo() {

    let headers = new Headers();

    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post('', "null", { headers: headers })
      .map(res => res.json());

  }

  getFolders(path?) {

    let headers = new Headers();

    headers.append('Authorization', 'Bearer ' + this.accessToken);
    headers.append('Content-Type', 'application/json');

    let folderPath;

    if (typeof (path) == "undefined" || !path) {

      folderPath = {
        path: ""
      };

    } else {

      folderPath = {
        path: path
      };

      if (this.folderHistory[this.folderHistory.length - 1] != path) {
        this.folderHistory.push(path);
      }

    }

    return this.http.post('https://api.dropboxapi.com/2-beta-2/files/list_folder', JSON.stringify(folderPath), { headers: headers })
      .map(res => res.json());

  }

  goBackFolder() {

    if (this.folderHistory.length > 0) {

      this.folderHistory.pop();
      let path = this.folderHistory[this.folderHistory.length - 1];

      return this.getFolders(path);
    }
    else {
      return this.getFolders();
    }
  }

  uploadFile(path: any) {

    console.log(path);

    const fileTransfer: FileTransferObject = this.transfer.create();

    let headers1 = new Headers();
    headers1.append('Authorization', 'Bearer ' + this.accessToken);
    headers1.append('Content-Type', 'application/octet-stream');
    headers1.append('Dropbox-API-Arg', '{"path":"/images.png"}');

    let options: FileUploadOptions = {
      fileKey: "display_image",
      fileName: "filename.jpg",
      chunkedMode: false,
      headers: headers1
    };

    fileTransfer.upload(path, 'https://content.dropboxapi.com/2/files/upload', options)
      .then(async (data) => {
        console.log('uploaded successfully');
        console.log(data);
      }, err => {
        alert(err);
      });
  }
}
