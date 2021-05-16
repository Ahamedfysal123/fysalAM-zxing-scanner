import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanReadModalPage } from './scan-read-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ScanReadModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanReadModalPageRoutingModule {}
