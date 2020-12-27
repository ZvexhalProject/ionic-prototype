import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductformPageRoutingModule } from './productform-routing.module';

import { ProductformPage } from './productform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductformPageRoutingModule
  ],
  declarations: [ProductformPage]
})
export class ProductformPageModule {}
