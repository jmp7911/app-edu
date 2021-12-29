import { formatNumber, registerLocaleData } from '@angular/common';
import { Component, ElementRef, Input, LOCALE_ID, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';
import { DecimalPipe } from '@angular/common';

@Component({
  templateUrl: './naver.0.html',
})
export class NaverAfterComponent implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext(index: number) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './naver.1.html'
})
export class NaverAfter1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(2);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
@Component({
  templateUrl: './naver.2.html'
})
export class NaverAfter2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './naver.3.html'
})
export class NaverAfter3Component implements Page {
  @Input() data: any;
  add: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.add = localStorage.getItem('BAdd');
    this.loaderService.assocIndex = 3;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(4);
  }
}
@Component({
  templateUrl: './naver.4.html'
})
export class NaverAfter4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.addDetail = localStorage.getItem('BAddDetail');
    this.loaderService.assocIndex = 7;
  }
  checkValue(value: string) {
    localStorage.setItem('BAddDetail', value);
    console.log(localStorage.getItem('BAddDetail'));
    this.dynamicPageComponent.loadAfterComponent(5);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(5);
  }
}
@Component({
  templateUrl: './naver.5.html'
})
export class NaverAfter5Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 8;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(6);
  }
}
@Component({
  templateUrl: './naver.6.html'
})
export class NaverAfter6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 9;
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
  templateUrl: './naver.7.html'
})
export class NaverAfter7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 10;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(8);
  }
}
@Component({
  templateUrl: './naver.8.html'
})
export class NaverAfter8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 11;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(9);
  }
  checkValue(value: string) {
    localStorage.setItem('BAddDetail', value);
    console.log(localStorage.getItem('BAddDetail'));
    this.dynamicPageComponent.loadAfterComponent(9);
  }
}
@Component({
  templateUrl: './naver.9.html'
})
export class NaverAfter9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 12;
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
  templateUrl: './naver.10.html'
})
export class NaverAfter10Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 13;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(11);
  }
}
@Component({
  templateUrl: './naver.11.html'
})
export class NaverAfter11Component implements Page {
  @Input() data: any;
  color: string;
  size: string;
  cnt = 1;
  total = '113,500';
  show = false;
  colorName = '색상을 선택하세요';
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private decimalPipe: DecimalPipe) {
    this.loaderService.assocIndex = 17;
    localStorage.setItem('NTotalAmount', '71300');
    localStorage.setItem('NTotalCount', '1');
  }
  selectColor($event) {
    this.loaderService.assocIndex = 18;
    localStorage.setItem('NColor', $event.target.value);
    this.color = $event.target.value;
  }
  selectSize($event) {
    this.loaderService.assocIndex = 19;
    localStorage.setItem('NSize', $event.target.value);
    this.size = $event.target.value;
  }
  plus() {
    this.cnt++;
    this.calculate();
  }
  minus() {
    if (this.cnt > 1) {
      this.cnt--;
    }
    this.calculate();
  }
  calculate() {
    localStorage.setItem('NTotalAmount', (this.cnt * 113150).toString());
    this.total = this.decimalPipe.transform(this.cnt * 113150, '1.0-2');
    localStorage.setItem('NTotalCount', this.cnt.toString());
  }
  goNext() {
    if (!this.color && this.color === undefined) {
      this.utilService.showAlert('알림', '색상을 선택하세요');
      return;
    }
    if (!this.size && this.size === undefined) {
      this.utilService.showAlert('알림', '사이즈를 선택하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(12);
  }
  colorSelected() {
    this.colorName = '색상/실버';
  }
}
@Component({
  templateUrl: './naver.12.html'
})
export class NaverAfter12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 20;
    setTimeout(() => {
      if (this.loaderService.currentIndex === 12) {
        this.dynamicPageComponent.loadComponent(13);
      }
    }, 2500);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(13);
  }
}
@Component({
  templateUrl: './naver.13.html'
})
export class NaverAfter13Component implements Page {
  @Input() data: any;
  afterDiscountPrice;
  color;
  size;
  totalAmount;
  totalCount;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private decimalPipe: DecimalPipe) {
    this.loaderService.assocIndex = 21;
    this.color = localStorage.getItem('NColor');
    this.size = localStorage.getItem('NSize');
    this.totalAmount = this.decimalPipe.transform(localStorage.getItem('NTotalAmount'), '1.0-2');
    this.totalCount = localStorage.getItem('NTotalCount');
    this.afterDiscountPrice = this.decimalPipe.transform(localStorage.getItem('NTotalAmount'), '1.0-2');
  }
  selectDiscount($event) {
    const price = parseInt(localStorage.getItem('NTotalAmount'), 10) + parseInt($event.target.value, 10);
    localStorage.setItem('NCoupon', $event.target.value);
    this.afterDiscountPrice = this.decimalPipe.transform(price.toString(), '1.0-2');
    localStorage.setItem('NAfterDiscountPrice', price.toString());
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(14);
  }
}
@Component({
  templateUrl: './naver.14.html'
})
export class NaverAfter14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 22;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(15);
  }
}
@Component({
  templateUrl: './naver.15.html'
})
export class NaverAfter15Component implements Page {
  @Input() data: any;
  price: string;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
  private decimalPipe: DecimalPipe) {
    this.loaderService.assocIndex = 23;
    this.price = this.decimalPipe.transform(localStorage.getItem('NTotalAmount'), '1.0-2');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(16);
  }
}
@Component({
  templateUrl: './naver.16.html'
})
export class NaverAfter16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 24;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(17);
  }
}
@Component({
  templateUrl: './naver.17.html'
})
export class NaverAfter17Component implements Page {
  @Input() data: any;
  price;
  afterDiscountPrice;
  coupon;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
  private decimalPipe: DecimalPipe) {
    this.loaderService.assocIndex = 25;
    this.price = this.decimalPipe.transform(localStorage.getItem('NTotalAmount'), '1.0-2');
    this.afterDiscountPrice = this.decimalPipe.transform(localStorage.getItem('NAfterDiscountPrice'), '1.0-2');
    this.coupon = this.decimalPipe.transform(localStorage.getItem('NCoupon'), '1.0-2');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(18);
  }
}
@Component({
  templateUrl: './naver.18.html'
})
export class NaverAfter18Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 26;
  }
  goNext() {
    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(19);
  }
}
@Component({
  templateUrl: './naver.19.html'
})
export class NaverAfter19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 27;
    setTimeout(() => {
      if (this.loaderService.currentIndex === 19) {
        this.dynamicPageComponent.loadComponent(20);
      }
    }, 2500);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(20);
  }
}
@Component({
  templateUrl: './naver.20.html'
})
export class NaverAfter20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private router: Router) {
  }
  goCarrot() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('carrot');
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(0);
  }
  goCategory() {
    this.loaderService.currentIndex = 0;
    this.router.navigate(['/home/category']);
  }
}
