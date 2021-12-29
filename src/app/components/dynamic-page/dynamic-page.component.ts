import {
  AfterViewInit, Component, ComponentFactoryResolver, Input,
  OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';

import { AdDirective } from '../../directives/ad.directive';
import { PageItem } from '../../classes/page-item';
import { Page } from '../page';
import { UtilService } from 'src/app/services/util.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-dynamic-page',
  template: `<ng-template appHost></ng-template>`,
  styleUrls: ['./dynamic-page.component.scss'],
})
export class DynamicPageComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() ads: PageItem[] = [];
  @Input() afterAds: PageItem[] = [];
  @Input() flag: string;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: number|undefined;
  currentIndex;
  counter = 0;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private utilService: UtilService,
    private loaderService: LoaderService,
    private platform: Platform,
    private router: Router,
    private locationStrategy: LocationStrategy,
  ) {
    this.initializeApp();
   }
  ngAfterViewInit() {
    // this.loadAfterComponent(15);
    this.loadComponent(0);
   }
  ngOnChanges() {
    console.log('changes');
    console.log(this.flag);
    let to: number;
    let isByMyself: boolean;
    if (this.loaderService.self === 'back') {
      if (this.loaderService.currentIndex > 1) {
        if (this.loaderService.isByMyself) {
          if ( (this.loaderService.category === 'carrot' &&
              [9, 12, 17].includes(this.loaderService.currentIndex))) {
            this.loadAfterComponent(this.loaderService.currentIndex + 1);
            return;
          }
          if ((this.loaderService.category === 'carrot' &&
            [8].includes(this.loaderService.currentIndex))) {
            this.loadAfterComponent(this.loaderService.currentIndex + 2);
            return;
          }
          if (this.loaderService.enableTip) {
            this.loadAfterComponent(this.loaderService.currentIndex - 1);
          } else {
            if (this.currentIndex === 0) {
              this.loadComponent(this.loaderService.currentIndex - 1);
            } else {
              this.loadAfterComponent(this.currentIndex);
            }
          }
        } else {
          if ((this.loaderService.category === 'baemin' &&
            this.loaderService.currentIndex === 25) ||
            (this.loaderService.category === 'carrot' &&
            [10, 15, 20, 30].includes(this.loaderService.currentIndex))) {
            this.loadComponent(this.loaderService.currentIndex + 1);
            return;
          }
          if (this.loaderService.backToHome === this.loaderService.currentIndex) {
            this.loadComponent(0);
          } else {
            this.loadComponent(this.loaderService.currentIndex - 1);
          }
        }
      } else if (this.loaderService.currentIndex === 1) {
        this.loadComponent(0);
      } else {
        this.loaderService.self = 'home';
        this.router.navigate(['/home/category']);
      }
    } else {
      this.currentIndex = this.loaderService.currentIndex;
      if (this.loaderService.currentIndex && this.loaderService.currentIndex !== undefined) {
        this.loaderService.currentIndex = this.loaderService.assocIndex;
        to = this.loaderService.currentIndex;
        isByMyself = true;
      } else {
        to = 0;
        isByMyself = false;
      }
      this.loadComponent(to, isByMyself);
    }
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(11, () => {
        if (this.locationStrategy.path() === '/' || this.locationStrategy.path() === '/home' ||
          this.locationStrategy.path() === '/home/category') {
          if (this.counter === 0) {
            this.counter++;
            this.utilService.showToast('뒤로가기를 한번 더 누르면 종료됩니다.');
            setTimeout(() => {
              this.counter = 0;
            }, 1500);
          } else {
            this.counter = 0;
            // eslint-disable-next-line @typescript-eslint/dot-notation
            navigator['app'].exitApp();
          }
        } else {
          if (this.loaderService.currentIndex > 1) {
            if (this.loaderService.isByMyself) {
              if ( (this.loaderService.category === 'carrot' &&
                  [9, 12, 17].includes(this.loaderService.currentIndex))) {
                this.loadAfterComponent(this.loaderService.currentIndex + 1);
                return;
              }
              if ((this.loaderService.category === 'carrot' &&
                [8].includes(this.loaderService.currentIndex))) {
                this.loadAfterComponent(this.loaderService.currentIndex + 2);
                return;
              }
              if (this.loaderService.enableTip) {
                this.loadAfterComponent(this.loaderService.currentIndex - 1);
              } else {
                if (this.currentIndex === 0) {
                  this.loadComponent(this.loaderService.currentIndex - 1);
                } else {
                  this.loadAfterComponent(this.currentIndex);
                }
              }
            } else {
              if (this.loaderService.isTutorial) {
                if ((this.loaderService.category === 'baemin' &&
                  [7, 14, 28].includes(this.loaderService.currentIndex)) ||
                  (this.loaderService.category === 'naver' &&
                    [7, 16].includes(this.loaderService.currentIndex)) ||
                  (this.loaderService.category === 'carrot' &&
                    [13, 23].includes(this.loaderService.currentIndex)) ||
                  (this.loaderService.category === 'korail') &&
                  [21, 29].includes(this.loaderService.currentIndex) ||
                  (this.loaderService.category === 'burger' &&
                  [9, 20].includes(this.loaderService.currentIndex))) {
                  console.log('double back');
                  this.loadComponent(this.loaderService.currentIndex - 3);
                  return;
                }
              }
              if ((this.loaderService.category === 'baemin' &&
                this.loaderService.currentIndex === 25) ||
                (this.loaderService.category === 'carrot' &&
                [10, 15, 20, 30].includes(this.loaderService.currentIndex))) {
                this.loadComponent(this.loaderService.currentIndex + 1);
                return;
              }
              if (this.loaderService.backToHome === this.loaderService.currentIndex) {
                this.loadComponent(0);
              } else {
                this.loadComponent(this.loaderService.currentIndex - 1);
              }
            }
          } else if (this.loaderService.currentIndex === 1) {
            this.loadComponent(0);
          } else {
            this.loaderService.self = 'home';
            this.router.navigate(['/home/category']);
          }
        }
      }
      );
    });
  }
  loadComponent(index: number, byMyself = false) {
    console.log('index : ', index);
    console.log('service on');
    this.loaderService.enableTip = false;
    if (index !== 0 && !byMyself && this.loaderService.isByMyself) {
      this.loaderService.enableTip = true;
      this.loadAfterComponent(index);
      return;
    }
    this.loaderService.isByMyself = byMyself;
    //this.currentIndex = index;
    this.loaderService.currentIndex = index;
    const adItem = this.ads[index];
    const viewContainerRef = this.adHost.viewContainerRef;
    const addComponent = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<Page>(addComponent);
    componentRef.instance.data = adItem.data;
  }

  loadAfterComponent(index: number) {
    console.log('index : ', index);
    console.log('after-service on');
    this.loaderService.enableTip = true;
    this.loaderService.isByMyself = true;
    //this.currentIndex = index;
    this.loaderService.currentIndex = index;
    const adItem = this.afterAds[index];
    const viewContainerRef = this.adHost.viewContainerRef;
    const addComponent = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<Page>(addComponent);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    setInterval(() => {
      this.loadComponent(0);
    }, 3000);
  }
}
