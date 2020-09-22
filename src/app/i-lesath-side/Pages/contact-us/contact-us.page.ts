import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('ls-home');
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(true, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
  }
}
