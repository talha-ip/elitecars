import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';

declare var WooCommerceAPI: any;

@Injectable({
  providedIn: 'root'
})
export class WooApiCallsService {

  public categoryItems = [];

 // Place Your Own Credentials
 public url: string = 'http://androidecommerce.com/hassan';
 public consumerKey: string = 'ck_d647d02ed260c7e34b2f459dda0f61fabb73b862';
 public consumerSecret: string = 'cs_12701539408500fd2eb659d8b5d75b8474f8fc4f';

  Woocommerce = WooCommerceAPI.WooCommerceAPI({
    url: this.url,
    consumerKey: this.consumerKey,
    consumerSecret: this.consumerSecret,
    wpAPI: true,
    queryStringAuth: true,
    version: 'wc/v3'
  });

  constructor(private httpNative: HTTP,
    public http: HttpClient,
    public platform: Platform) { }

  getWoo(url, ending) {
    let request = this.getUrl("get", url, ending).url;
    return this.getDataHttp(request);
  }

  getDataHttp(request) {
    return new Promise(resolve => {
      if (this.platform.is('cordova')) {
        this.httpNative.get(request, {}, {})
          .then(data => {
            let d = JSON.parse(data.data);

            console.log("Dataaa");
            console.log(d);

            resolve(d);
          })
          .catch(error => {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
          });
      }
      else {
        this.http.get(request).subscribe((data: any) => {
          let d = data;
          console.log("Dataaaa");
          console.log(d);
          resolve(d);
        }, (err) => {
          console.log("Error : " + request);
          console.log(err);
        });
      }
    });


  }

  ///
  getUrl(type, endpoint, ending) {
    console.log("Ending");
    console.log(ending);
    let start = ending
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

    console.log(s);
    return { url: s, headers: r.headers };
  }

  // For All Products Of Specific Catgeory
  setDataProduct(data) {
    this.categoryItems = data;
  }

  getDataProduct() {
    return this.categoryItems;
  }

}