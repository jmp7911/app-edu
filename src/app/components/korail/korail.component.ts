import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';

@Component({
  templateUrl: './korail.0.html',
})
export class KorailComponent implements Page {
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
  templateUrl: './korail.1.html'
})
export class Korail1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(2);
  }
}
@Component({
  templateUrl: './korail.2.html'
})
export class Korail2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(3);
    } else {
      this.dynamicPageComponent.loadComponent(3);
    }
  }
}
@Component({
  templateUrl: './korail.3.html'
})
export class Korail3Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(4);
    } else {
      this.dynamicPageComponent.loadComponent(4);
    }
  }
}
@Component({
  templateUrl: './korail.4.html'
})
export class Korail4Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(5);
    } else {
      this.dynamicPageComponent.loadComponent(5);
    }
  }
}
@Component({
  templateUrl: './korail.5.html'
})
export class Korail5Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(6);
    } else {
      this.dynamicPageComponent.loadComponent(6);
    }
  }
}
@Component({
  templateUrl: './korail.6.html'
})
export class Korail6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(7);
    } else {
      this.dynamicPageComponent.loadComponent(7);
    }
  }
}
@Component({
  templateUrl: './korail.7.html'
})
export class Korail7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(8);
    } else {
      this.dynamicPageComponent.loadComponent(8);
    }
  }
}
@Component({
  templateUrl: './korail.8.html'
})
export class Korail8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(9);
    } else {
      this.dynamicPageComponent.loadComponent(9);
    }
  }
}
@Component({
  templateUrl: './korail.9.html'
})
export class Korail9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(10);
  }
}
@Component({
  templateUrl: './korail.10.html'
})
export class Korail10Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(11);
    }
  }
}
@Component({
  templateUrl: './korail.11.html'
})
export class Korail11Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private router: Router
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(12);
    } else {
      this.dynamicPageComponent.loadComponent(12);
    }
  }
}
@Component({
  templateUrl: './korail.12.html'
})
export class Korail12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(13);
    }
  }
}
@Component({
  templateUrl: './korail.13.html'
})
export class Korail13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(14);
    } else {
      this.dynamicPageComponent.loadComponent(14);
    }
  }
}
@Component({
  templateUrl: './korail.14.html'
})
export class Korail14Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(15);
    } else {
      this.dynamicPageComponent.loadComponent(15);
    }
  }
}
@Component({
  templateUrl: './korail.15.html'
})
export class Korail15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(16);
    } else {
      this.dynamicPageComponent.loadComponent(16);
    }
  }
}
@Component({
  templateUrl: './korail.16.html'
})
export class Korail16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(17);
    } else {
      this.dynamicPageComponent.loadComponent(17);
    }
  }
}
@Component({
  templateUrl: './korail.17.html'
})
export class Korail17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private router: Router,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(18);
    } else {
      this.dynamicPageComponent.loadComponent(18);
    }
  }
}
@Component({
  templateUrl: './korail.18.html'
})
export class Korail18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isTutorial) {
      this.dynamicPageComponent.loadComponent(21);
    } else {
      this.dynamicPageComponent.loadComponent(19);
    }
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.19.html'
})
export class Korail19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private router: Router) {
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.20.html'
})
export class Korail20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 20;
    }
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(21);
    }
  }
}
@Component({
  templateUrl: './korail.21.html'
})
export class Korail21Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(22);
    }
  }
}
@Component({
  templateUrl: './korail.22.html'
})
export class Korail22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(21);
    } else {
      this.dynamicPageComponent.loadComponent(23);
    }
  }
}
@Component({
  templateUrl: './korail.23.html'
})
export class Korail23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(22);
    } else {
      this.dynamicPageComponent.loadComponent(24);
    }
  }
}
@Component({
  templateUrl: './korail.24.html'
})
export class Korail24Component implements Page {
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
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
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
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(23);
    } else {
      this.dynamicPageComponent.loadComponent(26);
    }
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.25.html'
})
export class Korail25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(26);
    }
  }
}
@Component({
  templateUrl: './korail.26.html'
})
export class Korail26Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(25);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(29);
      } else {
        this.dynamicPageComponent.loadComponent(27);
      }
    }
  }
}
@Component({
  templateUrl: './korail.27.html'
})
export class Korail27Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private router: Router) {
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './korail.28.html'
})
export class Korail28Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private router: Router,
    private utilService: UtilService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 28;
    }
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(29);
    }
  }
}
@Component({
  templateUrl: './korail.29.html'
})
export class Korail29Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(30);
    }
  }
}
@Component({
  templateUrl: './korail.30.html'
})
export class Korail30Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(31);
    }
  }
}
@Component({
  templateUrl: './korail.31.html'
})
export class Korail31Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(25);
    } else {
      this.dynamicPageComponent.loadComponent(32);
    }
  }
}
@Component({
  templateUrl: './korail.32.html'
})
export class Korail32Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(33);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
@Component({
  templateUrl: './korail.33.html'
})
export class Korail33Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private router: Router
  ) {
  }
  goNext(index) {
    this.dynamicPageComponent.loadComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
@Component({
  templateUrl: './korail.34.html'
})
export class Korail34Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(30);
    } else {
      this.dynamicPageComponent.loadComponent(35);
    }
  }
}
@Component({
  templateUrl: './korail.35.html'
})
export class Korail35Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(31);
    } else {
      this.dynamicPageComponent.loadComponent(36);
    }
  }
}
@Component({
  templateUrl: './korail.36.html'
})
export class Korail36Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(32);
    } else {
      this.dynamicPageComponent.loadComponent(37);
    }
  }
}
@Component({
  templateUrl: './korail.37.html'
})
export class Korail37Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(33);
    } else {
      this.dynamicPageComponent.loadComponent(38);
    }
  }
}
@Component({
  templateUrl: './korail.38.html'
})
export class Korail38Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(34);
    } else {
      this.dynamicPageComponent.loadComponent(39);
    }
  }
}
@Component({
  templateUrl: './korail.39.html'
})
export class Korail39Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(35);
    } else {
      this.dynamicPageComponent.loadComponent(40);
    }
  }
}
@Component({
  templateUrl: './korail.40.html'
})
export class Korail40Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    ) {
  }
  goNext(index) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
