import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  public data: any;

  constructor(private barcodeScanner: BarcodeScanner, private modalController: ModalController) { }

  ngOnInit() {
  }

  public scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  public closeModal(){
    this.modalController.dismiss();
  }

}
