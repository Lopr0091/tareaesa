import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaapiPageRoutingModule } from './pruebaapi-routing.module';

import { PruebaapiPage } from './pruebaapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaapiPageRoutingModule
  ],
  declarations: [PruebaapiPage]
})
export class PruebaapiPageModule {}
