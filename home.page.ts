import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScanReadModalPage } from '../scan-read-modal/scan-read-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) { }
  async scanReadModalPage() {
    const modal = await this.modalCtrl.create({
      component: ScanReadModalPage,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });
    return await modal.present();
  }
}
