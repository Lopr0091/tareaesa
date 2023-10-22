import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InterpolarPageRoutingModule } from './interpolar-routing.module';
import { InterpolarPage } from './interpolar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpolarPageRoutingModule
  ],
  declarations: [InterpolarPage]
})
export class InterpolarPageModule {}
