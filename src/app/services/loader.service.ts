import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BaeminAfterService } from './baemin-after.service';
import { BaeminService } from './baemin.service';
import { BurgerAfterService } from './burger-after.service';
import { BurgerService } from './burger.service';
import { CarrotAfterService } from './carrot-after.service';
import { CarrotService } from './carrot.service';
import { KorailAfterService } from './korail-after.service';
import { KorailService } from './korail.service';
import { NaverAfterService } from './naver-after.service';
import { NaverService } from './naver.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  ads = [];
  afterAds = [];
  isByMyself = false;
  isTutorial = false;
  backToHome: number;
  currentIndex: number;
  assocIndex: number;
  category: string;
  enableTip = false;
  flag = false;
  self: string;
  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private baeminService: BaeminService,
    private baeminAfterService: BaeminAfterService,
    private naverService: NaverService,
    private naverAfterService: NaverAfterService,
    private carrotService: CarrotService,
    private carrotAfterService: CarrotAfterService,
    private korailService: KorailService,
    private korailAfterService: KorailAfterService,
    private burgerService: BurgerService,
    private burgerAfterService: BurgerAfterService
  ) {
    this.self = 'home';
  }
  changeRoute(category: string) {
    this.currentIndex = 0;
    console.log('changeRoute');
    this.category = category;
    switch (category) {
      case 'baemin':
        this.ads = this.baeminService.getContent();
        this.afterAds = this.baeminAfterService.getContent();
        break;
      case 'naver':
        this.ads = this.naverService.getContent();
        this.afterAds = this.naverAfterService.getContent();
        break;
      case 'carrot':
        this.ads = this.carrotService.getContent();
        this.afterAds = this.carrotAfterService.getContent();
        break;
      case 'korail':
        this.ads = this.korailService.getContent();
        this.afterAds = this.korailAfterService.getContent();
        break;
      case 'burger':
        this.ads = this.burgerService.getContent();
        this.afterAds = this.burgerAfterService.getContent();
        break;
    }
    this.self = 'detail';
    this.router.navigate(['/detail', category]);
  }
  changeFlag(obj: string) {
    this.flag = !this.flag;
    this.self = obj;
  }
  // Simple loader
  customLoader() {
    this.loadingController.create({
      spinner: 'bubbles',
      message: '데이터 로딩중...',
      cssClass:'custom-class custom-loading',
      backdropDismiss:true
    }).then((res) => {
      res.present();
    });
  }
  // Dismiss loader
  dismissLoader() {
    this.loadingController.dismiss().then((response) => {
        console.log('Loader closed!', response);
    }).catch((err) => {
        console.log('Error occurred : ', err);
    });
  }
}
