
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/

import { Injectable, ApplicationRef } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';



declare var WooCommerceAPI: any;

@Injectable()

export class ConfigService {

  public url: string = 'http://fashion.androidecommerce.com';
  public consumerKey: string = 'ck_74b51c0167ef22d01fb2c167ce9452b943111d78';
  public consumerSecret: string = 'cs_883d4ec5be4fd4718dad9c8c22871b32b617d6df';

  public appInProduction = false;
  public productSlidesPerPage = 2.5;

  public languageDirection = localStorage.languageDirection;//default direction of app
  public appDirection: any = this.languageDirection;// application direction

  Woocommerce = WooCommerceAPI.WooCommerceAPI({
    url: this.url,
    consumerKey: this.consumerKey,
    consumerSecret: this.consumerSecret,
    wpAPI: true,
    queryStringAuth: true,
    version: 'wc/v3'
  });

  public loader = 'dots';

  constructor(
    public http: HttpClient,
    private storage: Storage,
    public platform: Platform,
    private applicationRef: ApplicationRef,
    private httpNative: HTTP
  ) {
    if (!this.appInProduction) {
      storage.get('httpAllDataArray').then((val) => {
        if (val != null) this.httpAllDataArray = val;
      });
    }
  }
  getWithUrl(url) {
    return this.getDataHttp(url);
  }
  getWoo(url) {
    let request = this.getUrl("get", url).url;
    return this.getDataHttp(request);
  }

  getDataHttp(request) {
    //console.log(request);
    let loadedData = this.loadAlreadyLoadedHttp(request);
    if (loadedData.found == false) {
      return new Promise(resolve => {
        if (this.platform.is('cordova')) {
          this.platform.ready().then(() => {
            this.httpNative.get(request, {}, {})
              .then(data => {
                let d = JSON.parse(data.data);
                this.storeHttpData(request, d);
                resolve(d);
                //console.log(data.status);
                //console.log(data.data); // data received by server
                //console.log(data.headers);
              })
              .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
              });
          });
        }
        else {
          this.http.get(request).subscribe((data: any) => {
            let d = data;
            this.storeHttpData(request, d);
            resolve(d);
          }, (err) => {
            console.log("Error : " + request);
            console.log(err);
          });
        }
      });
    }
    else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(loadedData.data);
        }, 200);

      });
    }
  }

  putAsync(url, dataToPost) {
    return new Promise(resolve => {
      let request = this.getUrl("put", url + "/")
      //console.log(dataToPost);
      if (this.platform.is('cordova')) {
        this.httpNative.setDataSerializer("json");
        this.httpNative.put(request.url, dataToPost, request.headers)
          .then(data => {
            resolve(JSON.parse(data.data));
            //console.log(data.status);
            //console.log(data.data); // data received by server
            //console.log(data.headers);
          })
          .catch(error => {
            console.log("------------------ error.status ---------------------");
            console.log(error.status);
            console.log("------------------ error.error ---------------------");
            console.log(error.error); // error message as string
            console.log("------------------ error.headers ---------------------");
            console.log(error.headers);
          });
      }
      else {
        this.http.put(request.url, dataToPost, request.headers).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          console.log("Error : " + request.url);
          console.log(err);
        });
      }
    });
  }

  getUrl(type, endpoint) {
    let start = "&"
    if (type == "put") start = "?";
    let r = this.Woocommerce._request2(type, endpoint);
    let s = r.url + start;
    if (this.url.indexOf('https://') != -1) {
      s = s + "consumer_key=" + this.consumerKey;
      s = s + "&consumer_secret=" + this.consumerSecret;
    }
    else if (this.url.indexOf('http://') != -1) {
      s = s + "oauth_consumer_key=" + r.qs.oauth_consumer_key;
      s = s + "&oauth_nonce=" + r.qs.oauth_nonce;
      s = s + "&oauth_signature=" + r.qs.oauth_signature;
      s = s + "&oauth_signature_method=" + r.qs.oauth_signature_method;
      s = s + "&oauth_timestamp=" + r.qs.oauth_timestamp;
      s = s + "&oauth_version=" + r.qs.oauth_version;
    }

    return { url: s, headers: r.headers };
  }
  loadAlreadyLoadedHttp(url) {
    let found = false;
    let data = {};
    if (!this.appInProduction) {
      let path = url;
      if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];
      else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];

      let d = this.httpAllDataArray[path];
      if (d != undefined) {
        data = d;
        found = true;
        // console.log("------------ url match -------------");
        // console.log(path);
      }

      // if (found == false) {
      //   console.log("------------ url not match -------------");
      //   console.log(path);
      // }
    }
    return { found: found, data: data };
  }
  public httpAllDataArray = [];
  storeHttpData(url, data) {
    if (!this.appInProduction) {//======================  for debuging =====================
      let path = url;
      if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];
      else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
      if (path.indexOf('orders/?') != -1) return;
      this.httpAllDataArray[path] = data;
      this.storage.set('httpAllDataArray', this.httpAllDataArray);
    }
  }

}