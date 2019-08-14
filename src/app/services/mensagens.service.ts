import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  loadingController: any;

  constructor(
    public alertController: AlertController,
  ) { }

  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

async presentLoading(){
  const loading = await this.loadingController.create({
    message: 'Carregando...',
    // duration: 2000
  });
  await loading.present();
  await loading.dismiss();

console.log('Loading dismissed!');
}
}
