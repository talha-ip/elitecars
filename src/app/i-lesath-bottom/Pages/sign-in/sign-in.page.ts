import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

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
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav: NavController) { }

  ngOnInit() {
  }

  goToForgotPage() {
    this.nav.navigateForward('lb-forgot-password');
  }

  goToSignUpPage() {
    this.nav.navigateForward('lb-sign-up');

  }
  dismiss() {
    this.nav.navigateForward('lb-home');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
}
