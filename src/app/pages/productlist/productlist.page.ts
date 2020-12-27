import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/shared/models/Product';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  public productlist: Product[];
  constructor(private modalController: ModalController, private apiService: ApiService) { }

  async ngOnInit() {
    try{
      this.productlist = await this.apiService.fetchProducts();
    }
    catch(e){
      console.log(e);
    }
  }

  public closeModal(){
    this.modalController.dismiss();
  }

}
