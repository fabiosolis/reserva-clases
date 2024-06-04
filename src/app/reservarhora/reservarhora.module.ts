import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservarhoraPageRoutingModule } from './reservarhora-routing.module';

import { ReservarhoraPage } from './reservarhora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservarhoraPageRoutingModule
  ],
  declarations: [ReservarhoraPage]
})
export class ReservarhoraPageModule {}
