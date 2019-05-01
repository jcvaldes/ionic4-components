import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  titulo: string = 'alert page';

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese su nombre',
      backdropDismiss: false,
      inputs: [
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Nombre'
        }
        // {
        //   name: 'name2',
        //   type: 'text',
        //   id: 'name2-id',
        //   value: 'hello',
        //   placeholder: 'Placeholder 2'
        // },
        // {
        //   name: 'name3',
        //   value: 'http://ionicframework.com',
        //   type: 'url',
        //   placeholder: 'Favorite site ever'
        // },
        // // input date with min & max
        // {
        //   name: 'name4',
        //   type: 'date',
        //   min: '2017-03-01',
        //   max: '2018-01-12'
        // },
        // // input date without min nor max
        // {
        //   name: 'name5',
        //   type: 'date'
        // },
        // {
        //   name: 'name6',
        //   type: 'number',
        //   min: -5,
        //   max: 10
        // },
        // {
        //   name: 'name7',
        //   type: 'number'
        // }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.titulo = data.txtName;
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
