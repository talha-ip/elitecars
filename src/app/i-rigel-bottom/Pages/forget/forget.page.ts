import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  public visiablePopup = false;
  public divBlur = ""
  public email = "";
  public resetBtn = true;
  public login = false;
  public visProfileItem = false;
  public visEditprofile = false;
  public listItems = [
    { icon: "assets/iconIShoe/account-user.svg", text: "Edit Profile", visItem: true },
    { icon: "assets/iconIShoe/account-order.svg", text: "My Order", visItem: true },
    { icon: "assets/iconIShoe/address.svg", text: "My Addresses", visItem: true },
    { icon: "assets/iconIShoe/reward-points.svg", text: "Reward Points", visItem: true },
    { icon: "assets/iconIShoe/about-us.svg", text: "About Us", visItem: true },
    { icon: "assets/iconIShoe/contact-us.svg", text: "Contact Us", visItem: true },
    { icon: "assets/iconIShoe/privacy.svg", text: "Privacy Policy", visItem: true },
    { icon: "assets/iconIShoe/refund.svg", text: "Refund Policy", visItem: true },
    { icon: "assets/iconIShoe/terms.svg", text: "Terms & Services", visItem: true },
    { icon: "assets/iconIShoe/share.svg", text: "Share", visItem: true },
    { icon: "assets/iconIShoe/rate-us.svg", text: "Rate Us", visItem: true },
    { icon: "assets/iconIShoe/settings.svg", text: "Settings", visItem: true },
  ];
  public listInputItems = [
    { placeHolder: "First Name:", type: "text" },
    { placeHolder: "Last Name:", type: "text" },
    { placeHolder: "Password:", type: "password" },
    { placeHolder: "Email:", type: "email" },
    { placeHolder: "Phone:", type: "tel" },
    { placeHolder: "City:", type: "text" },
  ];
  constructor(private navCtrl: NavController,
    //private service: DataServiceService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public toastCtrl: ToastController,
    public appEventsService: AppEventsService,
    private elementRef: ElementRef,
  ) {
    // service.getLogin().
    //this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.listItems[0].visItem = true;
      this.listItems[1].visItem = true;
      this.listItems[2].visItem = true;
      this.listItems[3].visItem = true;
      this.visProfileItem = true;
    }
  }
  ionViewWillEnter() {
    //this.login = this.service.getLogin();
    console.log("I am in my account class and login value=" + this.login)
    if (this.login == true) {
      this.listItems[0].visItem = true;
      this.listItems[1].visItem = true;
      this.listItems[2].visItem = true;
      this.listItems[3].visItem = true;
      this.visProfileItem = true;
    }
    // For Menu Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4');
  }
  goToPage(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("ss-home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("ss-categories");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("ss-wishlist");
    }
    else if (i == 3) {
      // this.navCtrl.navigateForward("about-us");
      this.toastFun('ss-about-us');
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("ss-contact-us");
    }
    else if (i == 5) {
      // this.navCtrl.navigateForward("privary-policy");
      this.toastFun('ss-privacy-policy');
    }
    else if (i == 6) {
      // this.navCtrl.navigateForward("refund-policy");
      this.toastFun('ss-refund-policy');
    }
    else if (i == 7) {
      // this.navCtrl.navigateForward("term-services");
      this.toastFun('ss-term-services');
    }
    else if (i == 8) {
      // this.navCtrl.navigateForward("share");
      this.toastFun('ss-share');
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("ss-review");
    }
    else if (i == 10) {
      // this.navCtrl.navigateForward("settings");
      this.toastFun('ss-settings');
    }
    else if (i == 11) {
      this.navCtrl.navigateForward("ss-my-account");
    }
    else if (i == 12) {
      this.navCtrl.navigateForward("ss-my-order");
    }
    else if (i == 13) {
      this.navCtrl.navigateForward("ss-my-addresses");
    }
    else if (i == 14) {
      this.navCtrl.navigateForward("ss-reward-points");
    }
    else if (i == 15) {
      this.navCtrl.navigateForward("ui-templates-details");
    }
  }
  async toastFun(val) {
    if (val == 'ss-about-us') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'About Us Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-privacy-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Privacy Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-refund-policy') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Refund Policy Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-term-services') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Term & Services Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-share') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Share Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'ss-settings') {
      //toast controller
      const toast = await this.toastCtrl.create({
        message: 'Settings Clicked',
        duration: 2000
      });
      toast.present();
    }
  }
  updateProfile() {
    this.visEditprofile = false;
  }
  goToLogin() {
    this.navCtrl.navigateForward("ss-login");
  }
  isforgetPassword() {
    this.divBlur = "blur(6px)"
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    this.visiablePopup = true;//for blur effect
  }
  forgetPass() {
    if (this.email != "") {
      this.resetBtn = false;
    }
    else {
      this.resetBtn = true;
    }
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
