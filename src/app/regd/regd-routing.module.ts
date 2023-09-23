import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegdPage } from './regd.page';

const routes: Routes = [
  {
    path: '',
    component: RegdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegdPageRoutingModule {}
