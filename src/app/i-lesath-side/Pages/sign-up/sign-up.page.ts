import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  formData = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phone: ''
  };
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }

  dismiss() {
    this.nav.navigateForward('ls-sign-in');
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
