import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public listInputItems = [
    { placeHolder: "First Name", type: "text" },
    { placeHolder: "Last Name", type: "text" },
    { placeHolder: "Email", type: "email" },
    { placeHolder: "Mobile Phone", type: "tel" },
    { placeHolder: "Password", type: "password" },
    { placeHolder: "Confirm Password", type: "password" },
  ];
  constructor(private appEventsService: AppEventsService,
    private navCtrl: NavController,) { }

  ngOnInit() {
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
