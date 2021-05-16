import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scan-read-modal',
  templateUrl: './scan-read-modal.page.html',
  styleUrls: ['./scan-read-modal.page.scss'],
})
export class ScanReadModalPage implements OnInit {
  qrResultString: string;
  constructor() { }

  ngOnInit() {
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    if(resultString)
    window.location.href = resultString;
  }
}

