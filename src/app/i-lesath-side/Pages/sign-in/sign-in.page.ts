import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  formData = {
    email: '',
    password: '',
  };
  constructor(public menuCtrl: MenuController, public nav: NavController) { }

  ngOnInit() {
  }

  goToForgotPage() {
    this.nav.navigateForward('ls-forgot-password');
  }

  goToSignUpPage() {
    this.nav.navigateForward('ls-sign-up');

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
