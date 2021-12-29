import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';
import { postcode } from '../../../assets/js/postcode.js';
@Component({
  templateUrl: './burger.0.html',
})
export class BurgerAfterComponent implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext(index: number) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './burger.1.html'
})
export class BurgerAfter1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.enableTip = false;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(2);
  }
}
@Component({
  templateUrl: './burger.2.html'
})
export class BurgerAfter2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 2;
  }
  checkValue(value: string) {
    localStorage.setItem('BAdd', value);
    this.dynamicPageComponent.loadAfterComponent(3);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(3);
  }
}
@Component({
  templateUrl: './burger.3.html'
})
export class BurgerAfter3Component implements Page {
  @Input() data: any;
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  @ViewChild('add') add: ElementRef;
  interval;
  pass = false;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private renderer: Renderer2,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 3;
    this.interval = setInterval((a) => {
      if (this.pass) {
        clearInterval(this.interval);
        this.dynamicPageComponent.loadAfterComponent(4);
      }
    }, 1500);
  }
  openDaumPopup() {
    postcode(this.renderer, this.popup.nativeElement, data => {
      this.add.nativeElement.value = data.address;
      localStorage.setItem('MAdd', data.address);
      localStorage.setItem('MRoadAdd', data.roadAddress);
      if (!data.address || data.address === undefined) {
        this.utilService.showAlert('알림', '주소를 입력하세요');
        return;
      }
      this.pass = true;
    });
  }
  closeDaumPopup() {
    this.renderer.setStyle(this.popup.nativeElement, 'display', 'none');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(4);
  }
}
@Component({
  templateUrl: './burger.4.html'
})
export class BurgerAfter4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.addDetail = localStorage.getItem('MAdd');
    this.loaderService.assocIndex = 4;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(5);
  }
}
@Component({
  templateUrl: './burger.5.html'
})
export class BurgerAfter5Component implements Page {
  @Input() data: any;
  @ViewChild('MAddDetail') addDetail: ElementRef;
  add;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 5;
    this.add = localStorage.getItem('MAdd');
  }
  goNext() {
    if (!this.addDetail.nativeElement.value) {
      this.utilService.showAlert('알림', '상세주소를 입력하세요');
      return;
    }
    localStorage.setItem('MAdd', localStorage.getItem('MAdd') + ' ' + this.addDetail.nativeElement.value);
    this.dynamicPageComponent.loadAfterComponent(6);
  }
}
@Component({
  templateUrl: './burger.6.html'
})
export class BurgerAfter6Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 6;
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(7);
  }
  goFirst() {
    this.dynamicPageComponent.loadComponent(0);
  }
}
@Component({
  templateUrl: './burger.7.html'
})
export class BurgerAfter7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 9;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(8);
  }
}
@Component({
  templateUrl: './burger.8.html'
})
export class BurgerAfter8Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 10;
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(9);
  }
}
@Component({
  templateUrl: './burger.9.html'
})
export class BurgerAfter9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 11;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(10);
  }
}
@Component({
  templateUrl: './burger.10.html'
})
export class BurgerAfter10Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 12;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(11);
  }
}
@Component({
  templateUrl: './burger.11.html'
})
export class BurgerAfter11Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 13;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(12);
  }
}
@Component({
  templateUrl: './burger.12.html'
})
export class BurgerAfter12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 14;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(13);
  }
}
@Component({
  templateUrl: './burger.13.html'
})
export class BurgerAfter13Component implements Page {
  @Input() data: any;
  cnt = 1;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 15;
  }
  plus() {
    this.cnt++;
  }
  minus() {
    if (this.cnt > 1) {
      this.cnt--;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(14);
  }
}
@Component({
  templateUrl: './burger.14.html'
})
export class BurgerAfter14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 16;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(15);
  }
}
@Component({
  templateUrl: './burger.15.html'
})
export class BurgerAfter15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 17;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(16);
  }
}
@Component({
  templateUrl: './burger.16.html'
})
export class BurgerAfter16Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 20;
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(17);
  }
}
@Component({
  templateUrl: './burger.17.html'
})
export class BurgerAfter17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 21;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(18);
  }
}
@Component({
  templateUrl: './burger.18.html'
})
export class BurgerAfter18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 22;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(19);
  }
}
@Component({
  templateUrl: './burger.19.html'
})
export class BurgerAfter19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 23;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(20);
  }
}
@Component({
  templateUrl: './burger.20.html'
})
export class BurgerAfter20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 24;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(21);
  }
}
@Component({
  templateUrl: './burger.21.html'
})
export class BurgerAfter21Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 25;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(22);
  }
}
@Component({
  templateUrl: './burger.22.html'
})
export class BurgerAfter22Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private utilService: UtilService,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 26;
  }
  goNext() {
    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(23);
  }
}
@Component({
  templateUrl: './burger.23.html'
})
export class BurgerAfter23Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 27;
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(24);
  }
}

@Component({
  templateUrl: './burger.24.html'
})
export class BurgerAfter24Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
  goBaemin() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('baemin');
  }
}
