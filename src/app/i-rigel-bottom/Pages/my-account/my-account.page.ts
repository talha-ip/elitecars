import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DataServiceService } from 'src/app/i-rigel-side/Pages/services/data-service.service';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  public login = false;
  public visProfileItem = false;
  public visEditprofile = false;
  public listItems = [
    { icon: "assets/iconIShoe/home-side.svg", text: "Home", visItem: true },
    { icon: "assets/iconIShoe/listview-side.svg", text: "Categories", visItem: true },
    { icon: "assets/iconIShoe/heart.svg", text: "Wishlist", visItem: true },
    { icon: "assets/iconIShoe/about-us.svg", text: "About Us", visItem: true },
    { icon: "assets/iconIShoe/contact-us.svg", text: "Contact Us", visItem: true },
    { icon: "assets/iconIShoe/privacy.svg", text: "Privacy Policy", visItem: true },
    { icon: "assets/iconIShoe/refund.svg", text: "Refund Policy", visItem: true },
    { icon: "assets/iconIShoe/terms.svg", text: "Terms & Services", visItem: true },
    { icon: "assets/iconIShoe/share.svg", text: "Share", visItem: true },
    { icon: "assets/iconIShoe/rate-us.svg", text: "Rate Us", visItem: true },
    { icon: "assets/iconIShoe/settings.svg", text: "Settings", visItem: true },
    { icon: "assets/iconIShoe/account-user.svg", text: "Edit Profile", visItem: true },
    { icon: "assets/iconIShoe/account-order.svg", text: "My Order", visItem: true },
    { icon: "assets/iconIShoe/address.svg", text: "My Addresses", visItem: true },
    { icon: "assets/iconIShoe/reward-points.svg", text: "Reward Points", visItem: true },
    { icon: "assets/CustomIcons/exit.svg", text: "Exit", visItem: true },
  ];
  public listInputItems = [
    { placeHolder: "First Name:", type: "text" },
    { placeHolder: "Last Name:", type: "text" },
    { placeHolder: "Password:", type: "password" },
    { placeHolder: "Email:", type: "email" },
    { placeHolder: "Phone:", type: "tel" },
    { placeHolder: "City:", type: "text" },
  ];
  constructor(private appEventsService: AppEventsService,
    private navCtrl: NavController,
    private service: DataServiceService,
    private toastCtrl: ToastController) {
    // service.getLogin().
    this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.visProfileItem = true;
    }
  }
  ionViewWillEnter() {
    this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.visProfileItem = true;
    }
  }
  goToPage(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("sb-home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("sb-categories");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("sb-wishlist");
    }
    else if (i == 3) {
      // this.navCtrl.navigateForward("about-us");
      this.toastFun('sb-about-us');
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("sb-contact-us");
    }
    else if (i == 5) {
      // this.navCtrl.navigateForward("privary-policy");
      this.toastFun('sb-privacy-policy');
    }
    else if (i == 6) {
      // this.navCtrl.navigateForward("refund-policy");
      this.toastFun('sb-refund-policy');
    }
    else if (i == 7) {
      // this.navCtrl.navigateForward("term-services");
      this.toastFun('sb-term-services');
    }
    else if (i == 8) {
      // this.navCtrl.navigateForward("share");
      this.toastFun('sb-share');
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("sb-review");
    }
    else if (i == 10) {
      // this.navCtrl.navigateForward("settings");
      this.toastFun('sb-settings');
    }
    else if (i == 11) {
      this.navCtrl.navigateForward("sb-my-account");
    }
    else if (i == 12) {
      this.navCtrl.navigateForward("sb-my-order");
    }
    else if (i == 13) {
      this.navCtrl.navigateForward("sb-my-addresses");
    }
    else if (i == 14) {
      this.navCtrl.navigateForward("sb-reward-points");
    }
    else if (i == 15) {
      this.appEventsService.publish('s_bottom', true);
      this.navCtrl.navigateForward("ui-templates-details");
    }
  }
  updateProfile() {
    this.visEditprofile = false;
  }
  goToLogin() {
    this.navCtrl.navigateForward("sb-login");
  }
  ngOnInit() {
  }
  async toastFun(val) {
    if (val == 'sb-about-us') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'About Us Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'sb-privacy-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Privacy Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'sb-refund-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Refund Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'sb-term-services') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Term & Services Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'sb-share') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Share Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'sb-settings') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Settings Clicked',
        duration: 2000
      });
      toast.present();
    }
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
