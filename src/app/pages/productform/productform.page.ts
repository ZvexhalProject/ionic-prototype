import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/shared/models/Product';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.page.html',
  styleUrls: ['./productform.page.scss'],
})
export class ProductformPage implements OnInit {
  public errorMsg: string = '';
  public formFields: {produktname:string, gewicht:number, einheit:string, menge:number,kategorie:string, bemerkung:string} = {
    produktname: '',
    gewicht: 0,
    einheit: '',
    menge: 1,
    kategorie: '',
    bemerkung: ''
  };

  constructor(private apiService: ApiService, private modalController: ModalController) { }

  ngOnInit() {

  }

  public async createProductPressed(): Promise<void>{
    try{
      this.errorMsg = '';
      let product: Product = new Product(-1, null,this.formFields.produktname,this.formFields.gewicht,this.formFields.einheit,this.formFields.menge,1,this.formFields.kategorie,'2022-02-14',this.formFields.bemerkung);
      await this.apiService.createProduct(product);
      this.formFields = {
        produktname: '',
        gewicht: 0,
        einheit: '',
        menge: 1,
        kategorie: '',
        bemerkung: ''
      };
      alert("Produkt wurde hinzugefügt")
    }
    catch(e){
      console.log(e);
      this.errorMsg = e;
    }
  }

  public closeModal(){
    this.modalController.dismiss();
  }

}
