import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { ScanReadModalPageRoutingModule } from './scan-read-modal-routing.module';
import { ScanReadModalPage } from './scan-read-modal.page';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
@NgModule({
  imports: [
    ZXingScannerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ScanReadModalPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ScanReadModalPage]
})
export class ScanReadModalPageModule { }
