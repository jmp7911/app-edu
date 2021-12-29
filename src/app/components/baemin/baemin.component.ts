import { DecimalPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext(index: number|undefined) {
    if (index === 1) {
      this.loaderService.isTutorial = true;
    } else {
      this.loaderService.isTutorial = false;
    }
    if (index === undefined) {
      index = 1;
    }
    this.dynamicPageComponent.loadComponent(index);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
@Component({
  templateUrl: './baemin.1.html'
})
export class Baemin1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(2);
  }
}
@Component({
  templateUrl: './baemin.2.html'
})
export class Baemin2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  checkValue(value: string) {
    localStorage.setItem('BAdd', value);
    this.dynamicPageComponent.loadComponent(3);
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(3);
  }
}
@Component({
  templateUrl: './baemin.3.html'
})
export class Baemin3Component implements Page, OnDestroy {
  @Input() data: any;
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  @ViewChild('add') add: ElementRef;
  interval;
  pass = false;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.interval = setInterval((a) => {
      if (this.pass) {
        clearInterval(this.interval);
        this.dynamicPageComponent.loadComponent(4);
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
}
@Component({
  templateUrl: './baemin.4.html'
})
export class Baemin4Component implements Page, OnInit {
  @Input() data: any;
  @ViewChild('addDetail') addDetail: ElementRef;
  add: string;
  roadAdd: string;
  pass = false;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
  ) {
  }
  ngOnInit() {
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  checkValue() {
    localStorage.setItem('BAddDetail', this.addDetail.nativeElement.value);
    if (!this.addDetail.nativeElement.value) {
      this.utilService.showAlert('알림', '상세주소를 입력하세요');
      return;
    }
    this.pass = true;
    setTimeout((a) => {
      if (this.pass) {
        this.dynamicPageComponent.loadComponent(5);
      }
    }, 1000);
  }
  goNext() {
    this.checkValue();
  }
}
@Component({
  templateUrl: './baemin.5.html'
})
export class Baemin5Component implements Page {
  @Input() data: any;
  addDetail: string;
  add: string;
  roadAdd: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService
    ) {
    this.addDetail = localStorage.getItem('BAddDetail');
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  goNext() {
    if (this.loaderService.isTutorial) {
      this.dynamicPageComponent.loadComponent(7);
    } else {
      this.dynamicPageComponent.loadComponent(6);
    }
  }
}
@Component({
  templateUrl: './baemin.6.html'
})
export class Baemin6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(7);
  }
}
@Component({
  templateUrl: './baemin.7.html'
})
export class Baemin7Component implements Page {
  @Input() data: any;
  addDetail: string;
  add: string;
  roadAdd: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService
  ) {
      this.addDetail = localStorage.getItem('BAddDetail');
      this.add = localStorage.getItem('BAdd');
      this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(5);
    } else {
      this.dynamicPageComponent.loadComponent(8);
    }
  }
}
@Component({
  templateUrl: './baemin.8.html'
})
export class Baemin8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(6);
    } else {
      this.dynamicPageComponent.loadComponent(9);
    }
  }
}
@Component({
  templateUrl: './baemin.9.html'
})
export class Baemin9Component implements Page, OnDestroy {
  @Input() data: any;
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  @ViewChild('add') add: ElementRef;
  pass = false;
  interval;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
    this.interval = setInterval((a) => {
      if (this.pass) {
        clearInterval(this.interval);
        if (this.loaderService.isByMyself) {
          this.dynamicPageComponent.loadComponent(7);
        } else {
          this.dynamicPageComponent.loadComponent(10);
        }
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
    this.dynamicPageComponent.loadComponent(10);
  }
}
@Component({
  templateUrl: './baemin.10.html'
})
export class Baemin10Component implements Page, OnInit {
  @Input() data: any;
  add: string;
  roadAdd: string;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  ngOnInit() {
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
    console.log(this.add);
    console.log(this.roadAdd);
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(8);
    } else {
      this.dynamicPageComponent.loadComponent(11);
    }
  }
}
@Component({
  templateUrl: './baemin.11.html'
})
export class Baemin11Component implements Page, OnInit {
  @Input() data: any;
  add: string;
  roadAdd: string;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  ngOnInit() {
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  checkValue(value: string) {
    this.goNext();
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(9);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(14);
      } else {
        this.dynamicPageComponent.loadComponent(12);
      }
    }
  }
}
@Component({
  templateUrl: './baemin.12.html'
})
export class Baemin12Component implements Page {
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
    this.loaderService.currentIndex = 0;
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './baemin.13.html'
})
export class Baemin13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 13;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(14);
  }
}
@Component({
  templateUrl: './baemin.14.html'
})
export class Baemin14Component implements Page {
  @Input() data: any;
  add;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
  ) {
    const bAdd = localStorage.getItem('BAdd');
    this.add = bAdd && bAdd !== undefined ?
      bAdd : '배민시 배민구 배민로1';
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(10);
    } else {
      this.dynamicPageComponent.loadComponent(15);
    }
  }
}
@Component({
  templateUrl: './baemin.15.html'
})
export class Baemin15Component implements Page {
  @Input() data: any;
  add;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      const bAdd = localStorage.getItem('BAdd');
    this.add = bAdd && bAdd !== undefined ?
      bAdd : '배민시 배민구 배민로1';
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(16);
    }
  }
}
@Component({
  templateUrl: './baemin.16.html'
})
export class Baemin16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(12);
    } else {
      this.dynamicPageComponent.loadComponent(17);
    }
  }
}
@Component({
  templateUrl: './baemin.17.html'
})
export class Baemin17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(18);
    }
  }
}
@Component({
  templateUrl: './baemin.18.html'
})
export class Baemin18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(14);
    } else {
      this.dynamicPageComponent.loadComponent(19);
    }
  }
}
@Component({
  templateUrl: './baemin.19.html'
})
export class Baemin19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(15);
    } else {
      this.dynamicPageComponent.loadComponent(20);
    }
  }
}
@Component({
  templateUrl: './baemin.20.html'
})
export class Baemin20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(16);
    } else {
      this.dynamicPageComponent.loadComponent(21);
    }
  }
}
@Component({
  templateUrl: './baemin.21.html'
})
export class Baemin21Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(17);
    } else {
      this.dynamicPageComponent.loadComponent(22);
    }
  }
}
@Component({
  templateUrl: './baemin.22.html'
})
export class Baemin22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(18);
    } else {
      this.dynamicPageComponent.loadComponent(23);
    }
  }
}
@Component({
  templateUrl: './baemin.23.html'
})
export class Baemin23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(19);
    } else {
      this.dynamicPageComponent.loadComponent(24);
    }
  }
}
@Component({
  templateUrl: './baemin.24.html'
})
export class Baemin24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(25);
    }
  }
}
@Component({
  templateUrl: './baemin.25.html'
})
export class Baemin25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(21);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(28);
      } else {
        this.dynamicPageComponent.loadComponent(26);
      }
    }
  }
}
@Component({
  templateUrl: './baemin.26.html'
})
export class Baemin26Component implements Page {
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
}
@Component({
  templateUrl: './baemin.27.html'
})
export class Baemin27Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 27;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(28);
  }
}
@Component({
  templateUrl: './baemin.28.html'
})
export class Baemin28Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(21);
    } else {
      this.dynamicPageComponent.loadComponent(29);
    }
  }
}
@Component({
  templateUrl: './baemin.29.html'
})
export class Baemin29Component implements Page {
  @Input() data: any;
  cnt1 = 1;
  cnt2 = 1;
  total = '30,000';
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private decimalPipe: DecimalPipe) {
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
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(22);
    } else {
      this.dynamicPageComponent.loadComponent(30);
    }
  }
}
@Component({
  templateUrl: './baemin.30.html'
})
export class Baemin30Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(23);
    } else {
      this.dynamicPageComponent.loadComponent(31);
    }
  }
}
@Component({
  templateUrl: './baemin.31.html'
})
export class Baemin31Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(32);
    }
  }
}
@Component({
  templateUrl: './baemin.32.html'
})
export class Baemin32Component implements Page {
  @Input() data: any;
  total: string;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    this.total = localStorage.getItem('BTotalAmount');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(25);
    } else {
      this.dynamicPageComponent.loadComponent(33);
    }
  }
}
@Component({
  templateUrl: './baemin.33.html'
})
export class Baemin33Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(26);
    } else {
      this.dynamicPageComponent.loadComponent(34);
    }
  }
}
@Component({
  templateUrl: './baemin.34.html'
})
export class Baemin34Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(27);
    } else {
      this.dynamicPageComponent.loadComponent(35);
    }
  }
}
@Component({
  templateUrl: './baemin.35.html'
})
export class Baemin35Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(28);
    } else {
      this.dynamicPageComponent.loadComponent(36);
    }
  }
}
@Component({
  templateUrl: './baemin.36.html'
})
export class Baemin36Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(29);
    } else {
      this.dynamicPageComponent.loadComponent(37);
    }
  }
}
@Component({
  templateUrl: './baemin.37.html'
})
export class Baemin37Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(30);
    } else {
      this.dynamicPageComponent.loadComponent(38);
    }
  }
}
@Component({
  templateUrl: './baemin.38.html'
})
export class Baemin38Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  @ViewChild('cvc') cvc: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    if (!this.cvc.nativeElement.value) {
      this.utilService.showAlert('알림', 'cvc 번호를 입력하세요');
      return;
    }
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(31);
    } else {
      this.dynamicPageComponent.loadComponent(39);
    }
  }
}
@Component({
  templateUrl: './baemin.39.html'
})
export class Baemin39Component implements Page {
  @Input() data: any;
  add: string;
  roadAdd: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService
  ) {
    this.add = localStorage.getItem('BAdd');
    this.roadAdd = localStorage.getItem('BRoadAdd');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(32);
    } else {
      this.dynamicPageComponent.loadComponent(40);
    }
  }
}
@Component({
  templateUrl: './baemin.40.html'
})
export class Baemin40Component implements Page {
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
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
