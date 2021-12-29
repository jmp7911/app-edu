import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { DynamicPageComponent } from '../components/dynamic-page/dynamic-page.component';
import { AdDirective } from '../directives/ad.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DetailPage,
    DynamicPageComponent,
    AdDirective
  ]
})
export class DetailPageModule {}
