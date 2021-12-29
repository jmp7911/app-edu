import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaeminService } from './services/baemin.service';
import { BaeminAfterService } from './services/baemin-after.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaverAfterService } from './services/naver-after.service';
import { NaverService } from './services/naver.service';
import { CommonModule, DecimalPipe } from '@angular/common';

import { CarrotService } from './services/carrot.service';
import { CarrotAfterService } from './services/carrot-after.service';
import { KorailService } from './services/korail.service';
import { KorailAfterService } from './services/korail-after.service';
import { BurgerService } from './services/burger.service';
import { BurgerAfterService } from './services/burger-after.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule,
  CommonModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BaeminService, BaeminAfterService, NaverAfterService, NaverService,
    DecimalPipe, CarrotService, CarrotAfterService, KorailService, KorailAfterService,
    BurgerService, BurgerAfterService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
