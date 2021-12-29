import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideLastPageRoutingModule } from './guide-last-routing.module';

import { GuideLastPage } from './guide-last.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideLastPageRoutingModule
  ],
  declarations: [GuideLastPage]
})
export class GuideLastPageModule {}
