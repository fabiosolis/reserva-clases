import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatSelectModule} from '@angular/material/select';
import { RegistrousuarioPageRoutingModule } from './registrousuario-routing.module';

import { RegistrousuarioPage } from './registrousuario.page';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrousuarioPageRoutingModule,
    MatFormFieldModule,
  ],
  declarations: [RegistrousuarioPage]
})
export class RegistrousuarioPageModule {}
