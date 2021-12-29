import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideFirstPageRoutingModule } from './guide-first-routing.module';

import { GuideFirstPage } from './guide-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideFirstPageRoutingModule
  ],
  declarations: [GuideFirstPage]
})
export class GuideFirstPageModule {}
