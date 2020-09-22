import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActionSheetController, NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

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
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService, public nav:NavController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async ResetPassword(){
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

  dismiss(){
    this.nav.navigateForward('lb-sign-in');
  }
  pinchEvent(e) {
    this.appEventsService.publish('l_bottom', true);
    this.nav.navigateForward("ui-templates-details");}
}
