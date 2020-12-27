import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductformPage } from '../productform/productform.page';
import { ProductlistPage } from '../productlist/productlist.page';
import { ScanPage } from '../scan/scan.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {

  }

  public async productListPressed(): Promise<void>{
    const modal = await this.modalController.create({
      component: ProductlistPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  public async createProductPressed(): Promise<void>{
    const modal = await this.modalController.create({
      component: ProductformPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  public async scanBarcodePressed(): Promise<void>{
    const modal = await this.modalController.create({
      component: ScanPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
