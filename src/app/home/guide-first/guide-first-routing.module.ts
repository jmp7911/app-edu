import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideFirstPage } from './guide-first.page';

const routes: Routes = [
  {
    path: '',
    component: GuideFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideFirstPageRoutingModule {}
