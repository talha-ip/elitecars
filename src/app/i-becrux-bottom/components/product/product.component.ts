import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, NavController } from '@ionic/angular';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { GenericServiceService } from '../../Pages/services/generic-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @ViewChild('myProduct', { read: ElementRef, static: false }) myProduct;

  public itemColor = [];
  public iconColorVar = "";
  data: any;
  @Input('data') item;//product data
  @Input('type') type;
  
  segments = "Newest"//first segment by default

  constructor(public translate: TranslateService, public toastController: ToastController, public renderer: Renderer2,
    public nav: NavController, public gService: GenericServiceService,
    private service: CustomThemeService) {

    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }

  }
  //icon funtion for wishlist
  async onIconClick(i) {

    if (i.fav == false) {
      i.fav = true;
      const toast = await this.toastController.create({
        message: 'Added To Wish List!',
        duration: 2000
      });
      toast.present();

    }
    else {
      i.fav = false;
      const toast = await this.toastController.create({
        message: 'Removed From Wish List!',
        duration: 2000
      });
      toast.present();
    }
  }
  goToProductDetail(id) {
    //alert(id);
    this.nav.navigateForward(["bb-product-detail", id]);
  }

  ngOnInit() {

  }

  addComma(num){
    //some type check here
      var numStr = num.toString();
      var intEnd = numStr.indexOf('.');
    var onePart =numStr;
    var otherPart ='';
    if(intEnd !== -1){
      onePart = numStr.slice(0,intEnd); 
      otherPart = numStr.slice(intEnd); 
    }
      
      return onePart.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')+otherPart;
    }
}
