import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  public expandCard: any = [];
  constructor(public menuCtrl: MenuController, public nav: NavController,
    private appEventsService: AppEventsService) {
    this.expandCard = [
      {
        expandedHelp: false, name: "Men Shoes", img: "assets/template-themes/shoe/images/category/4.jpg", id: 0,
        visIconZero: true,
        visIconOne: false,
        visIconTwo: false,
        subcategories: [
          { name: "Dress Shoes", img: "assets/template-themes/shoe/images/category/1.jpg" },
          { name: "Casual Shoes", img: "assets/template-themes/shoe/images/category/2.jpg" },
          { name: "Sports Shoes", img: "assets/template-themes/shoe/images/category/3.jpg" }
        ]
      },
      {
        expandedHelp: false, name: "Women Shoes", img: "assets/template-themes/shoe/images/category/5.jpg", id: 1,
        visIconZero: false,
        visIconOne: true,
        visIconTwo: false,
        subcategories: [
          { name: "Flat Shoes", img: "assets/template-themes/shoe/images/category/7.jpg" },
          { name: "Sandal Shoes", img: "assets/template-themes/shoe/images/category/8.jpg" },
        ]
      },
      {
        expandedHelp: false, name: "Kids Shoes", img: "assets/template-themes/shoe/images/category/6.jpg", id: 2,
        visIconZero: false,
        visIconOne: false,
        visIconTwo: true,
        subcategories: [
          { name: "Laceup Shoes", img: "assets/template-themes/shoe/images/category/9.jpg" },
          { name: "Fancy Shoes", img: "assets/template-themes/shoe/images/category/10.jpg" },
        ]
      }
    ];
  }

  ngOnInit() {
  }
  //expand card function
  expandCardFun(item): void {
    console.log(item.id);
    const rightIconZero = document.getElementById('right-icon-0');
    const rightIconOne = document.getElementById('right-icon-1');
    const rightIconTwo = document.getElementById('right-icon-2');

    if (item.id == 0) {
      if (rightIconZero.style.transform == '') {
        rightIconZero.style.transition = 'width 1s, height 1s, transform 1s';
        rightIconZero.style.transform = 'rotate(90deg)';
        console.log("null condition for icon");
      }
      else if (rightIconZero.style.transform == 'rotate(90deg)') {
        rightIconZero.style.transition = 'width 1s, height 1s, transform 1s';
        rightIconZero.style.transform = 'rotate(0deg)';
        rightIconOne.style.transform = 'rotate(0deg)';
        rightIconTwo.style.transform = 'rotate(0deg)';
        console.log("rotate(90deg) condition for icon");
      }
      else if (rightIconZero.style.transform == 'rotate(0deg)') {
        rightIconZero.style.transition = 'width 1s, height 1s, transform 1s';
        rightIconZero.style.transform = 'rotate(90deg)';
        rightIconOne.style.transform = 'rotate(0deg)';
        rightIconTwo.style.transform = 'rotate(0deg)';
        console.log("rotate(0deg) condition for icon");
      }
    }
    else if (item.id == 1) {
      if (rightIconOne.style.transform == '') {
        rightIconOne.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconOne.style.transform = 'rotate(90deg)';
        console.log("null condition for icon");
      }
      else if (rightIconOne.style.transform == 'rotate(90deg)') {
        rightIconOne.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconOne.style.transform = 'rotate(0deg)';
        rightIconZero.style.transform = 'rotate(0deg)';
        rightIconOne.style.transform = 'rotate(0deg)';
        console.log("rotate(90deg) condition for icon");
      }
      else if (rightIconOne.style.transform == 'rotate(0deg)') {
        rightIconOne.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconOne.style.transform = 'rotate(90deg)';
        rightIconZero.style.transform = 'rotate(0deg)';
        rightIconTwo.style.transform = 'rotate(0deg)';
        console.log("rotate(0deg) condition for icon");
      }
    }
    else if (item.id == 2) {
      if (rightIconTwo.style.transform == '') {
        rightIconTwo.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconTwo.style.transform = 'rotate(90deg)';
        console.log("null condition for icon");
      }
      else if (rightIconTwo.style.transform == 'rotate(90deg)') {
        rightIconTwo.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconTwo.style.transform = 'rotate(0deg)';
        rightIconZero.style.transform = 'rotate(0deg)';
        rightIconOne.style.transform = 'rotate(0deg)';
        console.log("rotate(90deg) condition for icon");
      }
      else if (rightIconTwo.style.transform == 'rotate(0deg)') {
        rightIconTwo.style.transition = 'width 2s, height 2s, transform 2s';
        rightIconTwo.style.transform = 'rotate(90deg)';
        rightIconZero.style.transform = 'rotate(0deg)';
        rightIconOne.style.transform = 'rotate(0deg)';
        console.log("rotate(0deg) condition for icon");
      }
    }
    if (item.expandedHelp) {
      item.expandedHelp = false;
      console.log("item.expandedHelp = false");
    }
    else {
      this.expandCard.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
          console.log("if");
        }
        else {
          console.log("else");
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  pinchEvent(e) {
    this.appEventsService.publish('s_bottom', true);
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(true, 'Menu4')
  }
}
