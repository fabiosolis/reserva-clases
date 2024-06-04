import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservarhoraPage } from './reservarhora.page';

const routes: Routes = [
  {
    path: '',
    component: ReservarhoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservarhoraPageRoutingModule {}
