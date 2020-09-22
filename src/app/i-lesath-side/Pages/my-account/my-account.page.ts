import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  formData = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: '',
    city: ''
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
