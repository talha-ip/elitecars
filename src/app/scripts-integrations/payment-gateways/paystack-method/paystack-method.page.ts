import { Component, OnInit } from '@angular/core';
import { Platform, ToastController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paystack-method',
  templateUrl: './paystack-method.page.html',
  styleUrls: ['./paystack-method.page.scss'],
})
export class PaystackMethodPage implements OnInit {

  // For Payment Requirements
  formData = {
    cardNumber: '',
    expiryMM: '',
    expiryYY: '', 
    cvc: '',
    email: '',
    amount: ''
  };
  constructor(public navCtrl: NavController, public platform: Platform, private loadingController: LoadingController, private toastCtrl: ToastController) {

  }
  ngOnInit() {
  }

  async Paystack() {
    const loading = await this.loadingController.create({})
    await loading.present();
    await this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        (<any>window).window.PaystackPlugin.chargeCard(
          async (resp) => {
            console.log('charge successful: ', resp.reference);
            console.log(resp);
            loading.dismiss();
            alert('Payment Succesfully: ' + resp.reference);

            //this.api.postOrder(form).subscribe(res => {});
          }, async (resp) => {
            console.log("Response");
            console.log(resp);
            console.log('charge failed: ' + this.formData.cardNumber + ", " + this.formData.expiryMM + ", " + this.formData.expiryYY + ", " + this.formData.expiryYY + ", " + resp);
            const toast = await this.toastCtrl.create({
              message: 'Invalid Card Information',
              position: 'middle',
              color: 'danger',
              duration: 2000
            });
            toast.present();
            this.navCtrl.navigateForward('receipt-cancal');
            loading.dismiss();
            console.log(resp);

          },
          {
            cardNumber: this.formData.cardNumber,
            expiryMonth: this.formData.expiryMM,
            expiryYear: this.formData.expiryYY,
            cvc: this.formData.cvc,
            email: this.formData.email,
            amountInKobo: this.formData.amount
          });
      }
    });
  }
}