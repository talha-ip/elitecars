import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

// import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { ShareModule } from './multi-purpose-screen-components/components/share/share.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For In App Browser
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'
// For Translation
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Custom Hammer Configuration For Pinch Gesture
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

// // For Shake Gesture
// import { Shake } from '@ionic-native/shake/ngx';

// For Translation
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

// For Becrux SideMenu Imports
// For Providers 
import { ConfigService } from './i-becrux-side/providers/config/config.service';
import { SharedDataService } from './i-becrux-side/providers/shared-data/shared-data.service';
import { LocationDataService } from './i-becrux-side/providers/location-data/location-data.service';

import { FormsModule } from '@angular/forms';

// // For Modals
import { CurrencyListPageModule } from './i-becrux-side//Pages/currency-list/currency-list.module';
import { PrivacyPolicyPageModule } from './i-becrux-side//Pages/privacy-policy/privacy-policy.module';
import { TermServicesPageModule } from './i-becrux-side//Pages/term-services/term-services.module';
import { RefundPolicyPageModule } from './i-becrux-side//Pages/refund-policy/refund-policy.module';
import { SelectCountryPageModule } from './i-becrux-side//Pages/select-country/select-country.module';
import { SelectZonesPageModule } from './i-becrux-side//Pages/select-zones/select-zones.module';
import { LanguagePageModule } from './i-becrux-side//Pages/language/language.module';
import { ScratchCardPageModule } from './i-becrux-side//Pages/scratch-card/scratch-card.module';
import { BlankModalPage } from './i-becrux-side//Pages/blank-modal/blank-modal.page';
import { BlankModalPageModule } from './i-becrux-side//Pages/blank-modal/blank-modal.module';

// For Becrux Bottom Imports
// For Providers 
import { ConfigService as bb_ConfigService } from './i-becrux-bottom/providers/config/config.service';
import { SharedDataService as bb_SharedDataService } from './i-becrux-bottom/providers/shared-data/shared-data.service';
import { LocationDataService as bb_LocationDataService } from './i-becrux-bottom/providers/location-data/location-data.service';

// // For Modals
import { CurrencyListPageModule as bb_CurrencyListPageModule } from './i-becrux-bottom//Pages/currency-list/currency-list.module';
import { PrivacyPolicyPageModule as bb_PrivacyPolicyPageModule } from './i-becrux-bottom//Pages/privacy-policy/privacy-policy.module';
import { TermServicesPageModule as bb_TermServicesPageModule } from './i-becrux-bottom//Pages/term-services/term-services.module';
import { RefundPolicyPageModule as bb_RefundPolicyPageModule } from './i-becrux-bottom//Pages/refund-policy/refund-policy.module';
import { SelectCountryPageModule as bb_SelectCountryPageModule } from './i-becrux-bottom//Pages/select-country/select-country.module';
import { SelectZonesPageModule as bb_SelectZonesPageModule } from './i-becrux-bottom//Pages/select-zones/select-zones.module';
import { LanguagePageModule as bb_LanguagePageModule } from './i-becrux-bottom//Pages/language/language.module';
import { ScratchCardPageModule as bb_ScratchCardPageModule } from './i-becrux-bottom//Pages/scratch-card/scratch-card.module';
import { BlankModalPage as bb_BlankModalPage } from './i-becrux-bottom//Pages/blank-modal/blank-modal.page';
import { BlankModalPageModule as bb_BlankModalPageModule } from './i-becrux-bottom//Pages/blank-modal/blank-modal.module';
// //For Rigel Side Modals
import { HomeModelPageModule } from './i-rigel-side/Pages/home-model/home-model.module';
import { ProductColorPageModule } from './i-rigel-side/Pages/product-color/product-color.module';
import { ProductDetailModalPageModule } from './i-rigel-side/Pages/product-detail-modal/product-detail-modal.module';
import { ProductPricePageModule } from './i-rigel-side/Pages/product-price/product-price.module';
import { ProductSizePageModule } from './i-rigel-side/Pages/product-size/product-size.module';
import { ProductSortPageModule } from './i-rigel-side/Pages/product-sort/product-sort.module';
//For Rigel Bottom Modals
import { HomeModelPageModule as sb_HomeModelPageModule } from './i-rigel-bottom/Pages/home-model/home-model.module';
import { ProductColorPageModule as sb_ProductColorPageModule } from './i-rigel-bottom/Pages/product-color/product-color.module';
import { ProductDetailModalPageModule as sb_ProductDetailModalPageModule } from './i-rigel-bottom/Pages/product-detail-modal/product-detail-modal.module';
import { ProductPricePageModule as sb_ProductPricePageModule } from './i-rigel-bottom/Pages/product-price/product-price.module';
import { ProductSizePageModule as sb_ProductSizePageModule } from './i-rigel-bottom/Pages/product-size/product-size.module';
import { ProductSortPageModule as sb_ProductSortPageModule } from './i-rigel-bottom/Pages/product-sort/product-sort.module';
//For Rigel Side Service
import { DataServiceService } from './i-rigel-side/Pages/services/data-service.service';
//For Rigel Side Service
import { DataServiceService as sb_DataServiceService } from './i-rigel-bottom/Pages/services/data-service.service';
// For Multi-Purpose Screens
// For Providers 
import { ConfigService as mp_ConfigService } from '../app/multi-purpose-screen-components/providers/config/config.service';
import { SharedDataService as mp_SharedDataService } from '../app/multi-purpose-screen-components/providers/shared-data/shared-data.service';
import { LocationDataService as mp_LocationDataService } from '../app/multi-purpose-screen-components/providers/location-data/location-data.service';
// Providers Import becrux mini apps
import { ConfigService as MiniBecruxConfigService } from '../app/all-mini-apps/becrux/providers/config/config.service';
import { SharedDataService as MiniBecruxSharedDataService } from '../app/all-mini-apps/becrux/providers/shared-data/shared-data.service';
// For Scripts
// For Social Apps Plugins
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LineLogin } from '@ionic-native/line-login/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// For Push Notifications
import { FCM } from '@ionic-native/fcm/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

// For Wordpress
import { HTTP } from '@ionic-native/http/ngx';

// For Youtube Api
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

// For Admob Free
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from './scripts-integrations/admobs/admob-free.service';


// Analytics

// For Google Analytics
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

// For Firebase Analytics
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

//For Flurry Analytics
import { FlurryAnalytics } from '@ionic-native/flurry-analytics/ngx';

// Payment Gateways
// For PayPal Method
import { PayPal } from '@ionic-native/paypal/ngx';

import { Stripe } from '@ionic-native/stripe/ngx';

// Cloud Storage 
// For Dropbox

import { from } from 'rxjs';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Http, HttpModule, Headers } from '@angular/http';
import { DropboxService } from './scripts-integrations/cloud-storage-integrations/dropbox.service';

// For LinkedIn
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth'
import { AuthService } from './scripts-integrations/social-integrations/auth.service';
import { LinkedinService } from './scripts-integrations/social-integrations/linkedin.service';
import { environment } from 'src/environments/environment';
// For Pinch Gesture
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pinch': { enable: true }
  }
}
// For Mini Apps
// For lesath mini app
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { HTTP as mini_lesath_HTTP } from '@ionic-native/http/ngx';
// Providers Import
import { ConfigService as mini_lesath_ConfigService } from '../app/all-mini-apps/lesath/providers/config/config.service';
import { SharedDataService as mini_lesath_SharedDataService } from '../app/all-mini-apps/lesath/providers/shared-data/shared-data.service';
import { PipesModule as mini_lesath_PipesModule } from '../app/all-mini-apps/lesath/pipes/pipes.module';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@NgModule({
  declarations: [AppComponent,
    // MenuComponentComponent
  ],

  imports: [
    ShareModule,
    // For By Default
    BlankModalPageModule,
    // For Becrux Side Modals
    PrivacyPolicyPageModule,
    TermServicesPageModule,
    RefundPolicyPageModule,
    SelectCountryPageModule,
    SelectZonesPageModule,
    LanguagePageModule,
    ScratchCardPageModule,
    CurrencyListPageModule,
    // For Becrux Bottom Modals
    bb_PrivacyPolicyPageModule,
    bb_TermServicesPageModule,
    bb_RefundPolicyPageModule,
    bb_SelectCountryPageModule,
    bb_SelectZonesPageModule,
    bb_LanguagePageModule,
    bb_ScratchCardPageModule,
    bb_CurrencyListPageModule,
    //For Rigel Side
    HomeModelPageModule,
    ProductColorPageModule,
    ProductDetailModalPageModule,
    ProductPricePageModule,
    ProductSizePageModule,
    ProductSortPageModule,
    //For Rigel Bottom
    sb_HomeModelPageModule,
    sb_ProductColorPageModule,
    sb_ProductDetailModalPageModule,
    sb_ProductPricePageModule,
    sb_ProductSizePageModule,
    sb_ProductSortPageModule,
    // For mini apps lesath
    mini_lesath_PipesModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    // For LinkedIn
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    // For mini apps becrux
    MiniBecruxConfigService,
    MiniBecruxSharedDataService,
    SpinnerDialog,
    //
    ThemeableBrowser,
    mini_lesath_HTTP,
    PhotoViewer,
    // For Becrux Side
    ConfigService,
    LocationDataService,
    SharedDataService,
    // For Becrux Bottom
    bb_ConfigService,
    bb_LocationDataService,
    bb_SharedDataService,
    // For Multi-Purpose Screens
    mp_ConfigService,
    mp_LocationDataService,
    mp_SharedDataService,
    // For Rigel Side
    DataServiceService,
    // For Rigel Bottom
    sb_DataServiceService,
    //For In App Browser
    InAppBrowser,
    // For Scripts
    // For Social Logins
    Facebook,
    GooglePlus,
    LineLogin,
    // For Push Notification
    FCM,
    OneSignal,
    // For YouTube API
    YoutubeVideoPlayer,
    // For AdMob
    AdMobFree,
    AdmobFreeService,
    // For Analytics
    GoogleAnalytics,
    FirebaseAnalytics,
    FlurryAnalytics,
    // For Payment Gateways
    PayPal,
    Stripe,
    // For Dropbox
    Camera,
    File,
    FileTransfer,
    DropboxService,
    Geolocation,
    HTTP,
    StatusBar,
    SplashScreen,
    // For Mini apps lesath
    mini_lesath_ConfigService,
    mini_lesath_SharedDataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    loadingController: any;
    url: string;
    http: any;
    items: any; 


    async loadPost(url: string, page, showLoading) {
      const loading = await this.loadingController.create({
      message: 'Loading Your posts'
      });
      if (showLoading) {
      await loading.present();
      }
      const route = this.url + 'wp-json/wp/v2/posts'
      if (!page) {
      page = '1';
      }
      return new Promise((resolve, reject) => {
      var concat;
      if (url.indexOf('?') > 0) {
      concat = '&';
      } else {
      concat = '?';
      }
      this.http.get(route + concat + 'page=' + page)
      .subscribe(data => {
      if (showLoading) {
      loading.dismiss();
      }
      this.items = data;
      resolve(this.items);
      },
      error => {
      if (showLoading) {
      loading.dismiss();
      }
      reject(error);
      this.presentToast(error.error.message)
      })
      });
    }
  presentToast(message: any) {
    throw new Error('Method not implemented.');
  }

}
