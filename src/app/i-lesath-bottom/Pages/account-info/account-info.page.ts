import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ToastButton } from '@ionic/core';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  listItems = [
    // { name: "About Us", icon: "assets/template-themes/lesath/custom-icons/about-us.svg" },
    { name: "Our Website", icon: "assets/custom-icons/web.svg" },
    { name: "Privacy Policy", icon: "assets/custom-icons/privacy-policy.svg" },
    { name: "Refund Policy", icon: "assets/custom-icons/refund-policy.svg" },
    { name: "Terms & Services", icon: "assets/custom-icons/terms.svg" },
    { name: "Contact Us", icon: "assets/custom-icons/contact.svg" },
    { name: "Color Theme", icon: "assets/custom-icons/color-brush.svg" }
  ];
  constructor(public nav: NavController, public appEventsService: AppEventsService, public toastController: ToastController, private cTheme: CustomThemeService) { }
  goToHelpAndSupport(i) {
    if (i == 0) {
      this.toast('website');
    }
    else if (i == 1) {
      this.nav.navigateForward("lb-privacy-policy");
    }
    else if (i == 2) {
      this.nav.navigateForward("lb-refund-policy");
    }
    else if (i == 3) {
      this.nav.navigateForward("lb-term-services");
    }
    else if (i == 4) {
      this.nav.navigateForward("lb-contact-us");
    }
    else if (i == 5) {
      this.nav.navigateForward("lb-color-theme");
    }
  }
  ngOnInit() {
  }
  dismiss() {
    this.nav.navigateForward("home");

  }
  async toast(val) {
    if (val == 'signOut') {
      const toast = await this.toastController.create({
        message: 'Sign Out Clicked',
        duration: 2000
      });
      toast.present();
    }
    else if (val == 'website') {
      const toast = await this.toastController.create({
        message: 'Official Website Clicked',
        duration: 2000
      });
      toast.present();
    }
  }
  goToSearch() {
    this.nav.navigateForward('lb-search');
  }
  goToCart() {
    this.nav.navigateForward('lb-cart');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
  exit() {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}