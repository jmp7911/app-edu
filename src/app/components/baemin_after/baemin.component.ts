import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';
import { postcode } from '../../../assets/js/postcode.js';
@Component({
  templateUrl: './baemin.0.html',
})
export class BaeminComponent implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext(index: number) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './baemin.1.html'
})
export class Baemin1Component implements Page {
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
  templateUrl: './baemin.2.html'
})
export class Baemin2Component implements Page {
  @Input() data: any;
    constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 2;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(3);
  }
}
@Component({
  templateUrl: './baemin.3.html'
})
export class Baemin3Component implements Page {
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
      localStorage.setItem('BAdd', data.address);
      localStorage.setItem('BRoadAdd', data.roadAddress);
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
}
@Component({
  templateUrl: './baemin.4.html'
})
export class Baemin4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 7;
    this.addDetail = localStorage.getItem('BAdd');
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
  templateUrl: './baemin.5.html'
})
export class Baemin5Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 8;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(6);
  }
}
@Component({
  templateUrl: './baemin.6.html'
})
export class Baemin6Component implements Page, OnDestroy {
  @Input() data: any;
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  @ViewChild('add') add: ElementRef;
  interval;
  pass = false;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private renderer: Renderer2,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 9;
    this.interval = setInterval((a) => {
      if (this.pass) {
        clearInterval(this.interval);
        this.dynamicPageComponent.loadAfterComponent(7);
      }
    }, 1500);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  openDaumPopup() {
    postcode(this.renderer, this.popup.nativeElement, data => {
      this.add.nativeElement.value = data.address;
      const address = data.address;
      const roadAddress = data.roadAddress;
      localStorage.setItem('BAdd', address);
      localStorage.setItem('BRoadAdd', roadAddress);
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
    this.dynamicPageComponent.loadAfterComponent(7);
  }
}
@Component({
  templateUrl: './baemin.7.html'
})
export class Baemin7Component implements Page {
  @Input() data: any;
  add: string;
  roadAdd: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 10;
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(8);
  }
}
@Component({
  templateUrl: './baemin.8.html'
})
export class Baemin8Component implements Page {
  @Input() data: any;
  add: string;
  roadAdd: string;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 11;
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(9);
  }
  checkValue(value: string) {
    if (!value || value === undefined) {
      this.utilService.showAlert('알림', '상세주소를 입력하세요');
      return;
    }
    localStorage.setItem('BAddDetail', value);
    this.dynamicPageComponent.loadAfterComponent(9);
  }
}
@Component({
  templateUrl: './baemin.9.html'
})
export class Baemin9Component implements Page {
  @Input() data: any;
  addRoad;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 14;
    this.addRoad = localStorage.getItem('BAdd');
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
  templateUrl: './baemin.10.html'
})
export class Baemin10Component implements Page {
  @Input() data: any;
  addRoad;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 15;
    this.addRoad = localStorage.getItem('BAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(11);
  }
}
@Component({
  templateUrl: './baemin.11.html'
})
export class Baemin11Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 16;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(12);
  }
}
@Component({
  templateUrl: './baemin.12.html'
})
export class Baemin12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 17;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(13);
  }
}
@Component({
  templateUrl: './baemin.13.html'
})
export class Baemin13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 18;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(14);
  }
}
@Component({
  templateUrl: './baemin.14.html'
})
export class Baemin14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 19;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(15);
  }
}
@Component({
  templateUrl: './baemin.15.html'
})
export class Baemin15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 20;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(16);
  }
}
@Component({
  templateUrl: './baemin.16.html'
})
export class Baemin16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 21;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(17);
  }
}
@Component({
  templateUrl: './baemin.17.html'
})
export class Baemin17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 22;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(18);
  }
}
@Component({
  templateUrl: './baemin.18.html'
})
export class Baemin18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 23;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(19);
  }
}
@Component({
  templateUrl: './baemin.19.html'
})
export class Baemin19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 24;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(20);
  }
}
@Component({
  templateUrl: './baemin.20.html'
})
export class Baemin20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 28;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(21);
  }
}
@Component({
  templateUrl: './baemin.21.html'
})
export class Baemin21Component implements Page {
  @Input() data: any;
  cnt1 = 1;
  cnt2 = 1;
  total = '30,000';
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private decimalPipe: DecimalPipe) {
    this.loaderService.assocIndex = 29;
  }
  calculate() {
    this.total = this.decimalPipe.transform((this.cnt1 + this.cnt2) * 15000, '1.0-2');
  }
  plus1() {
    this.cnt1++;
    this.calculate();
  }
  minus1() {
    if (this.cnt1 > 0) {
      this.cnt1--;
    }
    this.calculate();
  }
  plus2() {
    this.cnt2++;
    this.calculate();
  }
  minus2() {
    if (this.cnt2 > 0) {
      this.cnt2--;
    }
    this.calculate();
  }
  goNext() {
    localStorage.setItem('BTotalAmount', this.total.toString());
    this.dynamicPageComponent.loadAfterComponent(22);
  }
}
@Component({
  templateUrl: './baemin.22.html'
})
export class Baemin22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 30;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(23);
  }
}
@Component({
  templateUrl: './baemin.23.html'
})
export class Baemin23Component implements Page {
  @Input() data: any;
  total: number;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 32;
    this.total = parseInt(localStorage.getItem('BTotalAmount'), 10);
  }
  goNext(index) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './baemin.24.html'
})
export class Baemin24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.loaderService.assocIndex = 2;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(25);
  }
}
@Component({
  templateUrl: './baemin.25.html'
})
export class Baemin25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 33;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(26);
  }
}
@Component({
  templateUrl: './baemin.26.html'
})
export class Baemin26Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 34;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(27);
  }
}
@Component({
  templateUrl: './baemin.27.html'
})
export class Baemin27Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 35;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(28);
  }
}
@Component({
  templateUrl: './baemin.28.html'
})
export class Baemin28Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 36;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(29);
  }
}
@Component({
  templateUrl: './baemin.29.html'
})
export class Baemin29Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.loaderService.assocIndex = 37;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(30);
  }
}
@Component({
  templateUrl: './baemin.30.html'
})
export class Baemin30Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 38;
  }
  goNext() {
    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(31);
  }
}
@Component({
  templateUrl: './baemin.31.html'
})
export class Baemin31Component implements Page {
  @Input() data: any;
  addDetail: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService
  ) {
    this.loaderService.assocIndex = 39;
    // this.addDetail =
    //   localStorage.getItem('BAdd') + ' ' +
    //   localStorage.getItem('BAddDetail');
    if (localStorage.getItem('BAddDetail') && localStorage.getItem('BAddDetail') !== undefined) {
      this.addDetail = localStorage.getItem('BAdd') + '' + localStorage.getItem('BAddDetail');
    } else {
      this.addDetail = localStorage.getItem('BAdd');
    }
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(32);
  }
}
@Component({
  templateUrl: './baemin.32.html'
})
export class Baemin32Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private router: Router) {
    this.loaderService.enableTip = false;
  }
  goNaver() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('naver');
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.loaderService.currentIndex = 0;
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
}
