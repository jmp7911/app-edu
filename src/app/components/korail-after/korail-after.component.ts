import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';

@Component({
  templateUrl: './korail.0.html',
})
export class KorailAfterComponent implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext(index: number) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './korail.1.html'
})
export class KorailAfter1Component implements Page {
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
  templateUrl: './korail.2.html'
})
export class KorailAfter2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 2;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(3);
  }
}
@Component({
  templateUrl: './korail.3.html'
})
export class KorailAfter3Component implements Page {
  @Input() data: any;
  add: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 3;
    this.add = localStorage.getItem('BAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(4);
  }
}
@Component({
  templateUrl: './korail.4.html'
})
export class KorailAfter4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 4;
    this.addDetail = localStorage.getItem('BAddDetail');
  }

  goNext() {
    this.dynamicPageComponent.loadAfterComponent(5);
  }
}
@Component({
  templateUrl: './korail.5.html'
})
export class KorailAfter5Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 5;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(6);
  }
}
@Component({
  templateUrl: './korail.6.html'
})
export class KorailAfter6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 6;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(7);
  }
  checkValue(value: string) {
    localStorage.setItem('BAddDetail', value);
    console.log(localStorage.getItem('BAddDetail'));
    this.dynamicPageComponent.loadAfterComponent(7);
  }
}
@Component({
  templateUrl: './korail.7.html'
})
export class KorailAfter7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 7;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(8);
  }
}
@Component({
  templateUrl: './korail.8.html'
})
export class KorailAfter8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 8;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(9);
  }
}
@Component({
  templateUrl: './korail.9.html'
})
export class KorailAfter9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 9;
  }
  checkValue(value: string) {
    localStorage.setItem('BAddDetail', value);
    console.log(localStorage.getItem('BAddDetail'));
    this.dynamicPageComponent.loadAfterComponent(10);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(10);
  }
}
@Component({
  templateUrl: './korail.10.html'
})
export class KorailAfter10Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 10;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(11);
  }
}
@Component({
  templateUrl: './korail.11.html'
})
export class KorailAfter11Component implements Page {
  @Input() data: any;
  cnt = 1;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 11;
  }
  plus() {
    this.cnt++;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(12);
  }
}
@Component({
  templateUrl: './korail.12.html'
})
export class KorailAfter12Component implements Page {
  @Input() data: any;
  cnt = 1;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 12;
  }
  minus() {
    if (this.cnt > 0) {
      this.cnt--;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(13);
  }
}
@Component({
  templateUrl: './korail.13.html'
})
export class KorailAfter13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 13;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(14);
  }
}
@Component({
  templateUrl: './korail.14.html'
})
export class KorailAfter14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 14;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(15);
  }
}
@Component({
  templateUrl: './korail.15.html'
})
export class KorailAfter15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 15;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(16);
  }
}
@Component({
  templateUrl: './korail.16.html'
})
export class KorailAfter16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 16;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(17);
  }
}
@Component({
  templateUrl: './korail.17.html'
})
export class KorailAfter17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 17;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(18);
  }
}
@Component({
  templateUrl: './korail.18.html'
})
export class KorailAfter18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 18;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(19);
  }
}
@Component({
  templateUrl: './korail.19.html'
})
export class KorailAfter19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 21;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(20);
  }
}
@Component({
  templateUrl: './korail.20.html'
})
export class KorailAfter20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 22;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(21);
  }
}
@Component({
  templateUrl: './korail.21.html'
})
export class KorailAfter21Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 23;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(22);
  }
}
@Component({
  templateUrl: './korail.22.html'
})
export class KorailAfter22Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  @ViewChild('expireMonth') expireMonth: ElementRef;
  @ViewChild('expireYear') expireYear: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('cert') cert: ElementRef;
  @ViewChild('cardType') cardType: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 24;
  }
  goNext() {
    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    if (!this.expireMonth.nativeElement.value || !this.expireYear.nativeElement.value) {
      this.utilService.showAlert('알림', '카드 유효기간을 입력하세요');
      return;
    }
    if (!this.password.nativeElement.value) {
      this.utilService.showAlert('알림', '비밀번호 앞 2자리를 입력하세요');
      return;
    }
    if (!this.cert.nativeElement.value) {
      this.utilService.showAlert('알림', '인증 번호를 입력하세요');
      return;
    }
    if (!this.cardType.nativeElement.value) {
      this.utilService.showAlert('알림', '카드 종류를 입력하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(23);
  }
}
@Component({
  templateUrl: './korail.23.html'
})
export class KorailAfter23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 29;
  }
  goFirst() {
    this.dynamicPageComponent.loadComponent(0);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(24);
  }
}
@Component({
  templateUrl: './korail.24.html'
})
export class KorailAfter24Component implements Page {
  @Input() data: any;
  pass = false;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 30;
  }
  clickCheck($event) {
    this.pass = true;
    this.loaderService.assocIndex = 31;
  }
  goNext() {
    if (!this.pass) {
      this.utilService.showAlert('알림', '승차권을 선택하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(25);
  }
}
@Component({
  templateUrl: './korail.25.html'
})
export class KorailAfter25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.enableTip = false;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(26);
  }
}
@Component({
  templateUrl: './korail.26.html'
})
export class KorailAfter26Component implements Page {
  @Input() data: any;
  pass = false;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private router: Router
    ) {
    this.loaderService.enableTip = false;
  }
  goMacdonald() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('burger');
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.27.html'
})
export class KorailAfter27Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 32;
  }
  goNext(index) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './korail.28.html'
})
export class KorailAfter28Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
    this.loaderService.enableTip = false;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(29);
  }
}
@Component({
  templateUrl: './korail.29.html'
})
export class KorailAfter29Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
    this.loaderService.enableTip = false;
  }
  goMacdonald() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('burger');
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.30.html'
})
export class KorailAfter30Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 35;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(31);
  }
}
@Component({
  templateUrl: './korail.31.html'
})
export class KorailAfter31Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 36;
  }
  goNext(index) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './korail.32.html'
})
export class KorailAfter32Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 37;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(33);
  }
}
@Component({
  templateUrl: './korail.33.html'
})
export class KorailAfter33Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 38;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(34);
  }
}
@Component({
  templateUrl: './korail.34.html'
})
export class KorailAfter34Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
      this.loaderService.assocIndex = 39;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(35);
  }
}

