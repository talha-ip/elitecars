import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActionSheetController, NavController, MenuController } from '@ionic/angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formData = {
    email: ''
  };
  constructor(public menuCtrl: MenuController, public nav: NavController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async ResetPassword() {
    const actionSheet = await this.actionSheetController.create({
      header: 'You will recieve an email shortly. Open it and follow the instructions to reset your password.',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
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
