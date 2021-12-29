import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuideLastPage } from './guide-last.page';

const routes: Routes = [
  {
    path: '',
    component: GuideLastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideLastPageRoutingModule {}
