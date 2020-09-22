import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  //for blur effect
  public visiablePopup = false;
  public divBlur = ""
  public email = "";
  public resetBtn = true;
  constructor(public appEventsService: AppEventsService,
    private elementRef: ElementRef, public menuCtrl: MenuController, public nav: NavController) {
    // this.events.subscribe('blurValue', (data) => {
    //   this.divBlur = data;
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    // });
    let CatId = this.appEventsService.subscribe("catId");
    CatId.subscriptions.add(CatId.event.subscribe(data => {
      this.divBlur = data;
      this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    }));
  }
  forgetPass() {
    if (this.email != "") {
      this.resetBtn = false;
    }
    else {
      this.resetBtn = true;
    }
  }
  isforgetPassword() {
    this.divBlur = "blur(6px)"
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    this.visiablePopup = true;//for blur effect
  }
  ionViewWillEnter() {
    //value of blue from home modal
    // this.events.subscribe('blurValue', (data) => {
    //   this.divBlur = data;
    // });
    let CatId = this.appEventsService.subscribe("catId");
    CatId.subscriptions.add(CatId.event.subscribe(data => {
      this.divBlur = data;
    }));
    this.visiablePopup = false;//for blur effect
    this.elementRef.nativeElement.style.setProperty('--my-var', this.divBlur);
    // For Menu Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4');
  }
  dismiss() {
    this.appEventsService.publish('blurValue', "blur(0px)");
    this.visiablePopup = false;//for disable blur effect
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
}
