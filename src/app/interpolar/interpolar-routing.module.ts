import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolarPage } from './interpolar.page';

const routes: Routes = [
  {
    path: '',
    component: InterpolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpolarPageRoutingModule {}
