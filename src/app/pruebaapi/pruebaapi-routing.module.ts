import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaapiPage } from './pruebaapi.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaapiPageRoutingModule {}
