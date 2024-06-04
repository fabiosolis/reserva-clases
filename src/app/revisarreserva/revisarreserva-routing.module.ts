import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisarreservaPage } from './revisarreserva.page';

const routes: Routes = [
  {
    path: '',
    component: RevisarreservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisarreservaPageRoutingModule {}
