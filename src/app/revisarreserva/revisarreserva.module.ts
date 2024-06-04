import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisarreservaPageRoutingModule } from './revisarreserva-routing.module';

import { RevisarreservaPage } from './revisarreserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisarreservaPageRoutingModule
  ],
  declarations: [RevisarreservaPage]
})
export class RevisarreservaPageModule {}
