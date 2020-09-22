import { Component, OnInit } from '@angular/core';
//import { DataServiceService } from '../services/data-service.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login = false;
  public listLoginItems = [
    { icon: "assets/iconIShoe/username.svg", placeHolder: "Username", type: "text", bindingText: "" },
    { icon: "assets/iconIShoe/password.svg", placeHolder: "Password", type: "password", bindingText: "" },
  ];
  constructor(
    //private service: DataServiceService,
    private navCtrl: NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  isLogin() {
    if (this.listLoginItems[0].bindingText != "" && this.listLoginItems[1].bindingText != "") {
      this.login = true;
      console.log("i am in login class and setlogin=" + this.login)
      //this.service.setLogin(this.login);
      this.navCtrl.navigateForward("ss-home");
    }
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4')
  }
}
