import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';

@Component({
  templateUrl: './carrot.0.html',
})
export class CarrotAfterComponent implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext(index: number) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './carrot.1.html'
})
export class CarrotAfter1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.enableTip = false;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(2);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
@Component({
  templateUrl: './carrot.2.html'
})
export class CarrotAfter2Component implements Page {
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
  templateUrl: './carrot.3.html'
})
export class CarrotAfter3Component implements Page {
  @Input() data: any;
  add: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 3;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(4);
  }
}
@Component({
  templateUrl: './carrot.4.html'
})
export class CarrotAfter4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 4;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(5);
  }
}
@Component({
  templateUrl: './carrot.5.html'
})
export class CarrotAfter5Component implements Page {
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
  templateUrl: './carrot.6.html'
})
export class CarrotAfter6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 6;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(7);
  }
}
@Component({
  templateUrl: './carrot.7.html'
})
export class CarrotAfter7Component implements Page {
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
  templateUrl: './carrot.8.html'
})
export class CarrotAfter8Component implements Page {
  @Input() data: any;
  cnt = 10;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 9;
  }
  changeRange($event) {
    this.cnt = $event.target.value;
    this.loaderService.assocIndex = 10;
  }
  goNext(index) {
    this.dynamicPageComponent.loadAfterComponent(index);
  }
}
@Component({
  templateUrl: './carrot.9.html'
})
export class CarrotAfter9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 10;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(10);
  }
}
@Component({
  templateUrl: './carrot.10.html'
})
export class CarrotAfter10Component implements Page {
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
  templateUrl: './carrot.11.html'
})
export class CarrotAfter11Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 14;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(12);
  }
}
@Component({
  templateUrl: './carrot.12.html'
})
export class CarrotAfter12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 15;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(13);
  }
}
@Component({
  templateUrl: './carrot.13.html'
})
export class CarrotAfter13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 16;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(14);
  }
}
@Component({
  templateUrl: './carrot.14.html'
})
export class CarrotAfter14Component implements Page {
  @Input() data: any;
  @ViewChild('price') price: ElementRef;
  pass = false;
  basic = 130000;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private decimalPipe: DecimalPipe
  ) {
    this.loaderService.assocIndex = 17;
  }
  selectDiscount($event) {
    if ($event.target.value === 'discount1') {
      this.pass = true;
      this.price.nativeElement.value = this.decimalPipe.transform(this.basic - 5000, '1.0-2');
    } else if ($event.target.value === 'discount2') {
      this.pass = false;
      this.price.nativeElement.value = this.decimalPipe.transform(this.basic - 10000, '1.0-2');
    } else {
      this.pass = false;
      this.price.nativeElement.value = this.decimalPipe.transform(this.basic - 20000, '1.0-2');
    }
  }
  goNext() {
    if (!this.pass) {
      this.utilService.showAlert('알림', '-5000원을 선택해보세요');
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(15);
  }
}
@Component({
  templateUrl: './carrot.15.html'
})
export class CarrotAfter15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 18;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(16);
  }
}
@Component({
  templateUrl: './carrot.16.html'
})
export class CarrotAfter16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 19;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(17);
  }
}
@Component({
  templateUrl: './carrot.17.html'
})
export class CarrotAfter17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 20;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(18);
  }
  goFirst() {
    this.dynamicPageComponent.loadComponent(0);
  }
}
@Component({
  templateUrl: './carrot.18.html'
})
export class CarrotAfter18Component implements Page {
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
  templateUrl: './carrot.19.html'
})
export class CarrotAfter19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 24;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(20);
  }
  goFirst() {
    this.dynamicPageComponent.loadComponent(0);
  }
}
@Component({
  templateUrl: './carrot.20.html'
})
export class CarrotAfter20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 25;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(21);
  }
}
@Component({
  templateUrl: './carrot.21.html'
})
export class CarrotAfter21Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 26;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(22);
  }
}
@Component({
  templateUrl: './carrot.22.html'
})
export class CarrotAfter22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 27;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(23);
  }
}
@Component({
  templateUrl: './carrot.23.html'
})
export class CarrotAfter23Component implements Page {
  @Input() data: any;
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('category') category: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('detail') detail: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 28;
  }
  goNext() {
    if (!this.subject.nativeElement.value) {
      this.utilService.showAlert('알림', this.subject.nativeElement.placeholder);
      return;
    }
    if (!this.category.nativeElement.value) {
      this.utilService.showAlert('알림', this.category.nativeElement.placeholder);
      return;
    }
    if (!this.price.nativeElement.value) {
      this.utilService.showAlert('알림', this.price.nativeElement.placeholder);
      return;
    }
    if (!this.detail.nativeElement.value) {
      this.utilService.showAlert('알림', this.detail.nativeElement.placeholder);
      return;
    }
    this.dynamicPageComponent.loadAfterComponent(24);
  }
}
@Component({
  templateUrl: './carrot.24.html'
})
export class CarrotAfter24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.loaderService.assocIndex = 29;
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(25);
  }
}
@Component({
  templateUrl: './carrot.25.html'
})
export class CarrotAfter25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.loaderService.assocIndex = 30;
    setTimeout(() => {
      if (this.loaderService.currentIndex === 25) {
        this.dynamicPageComponent.loadComponent(26);
      }
    }, 2500);
  }
  goNext() {
    this.dynamicPageComponent.loadAfterComponent(26);
  }
  goFirst() {
    this.dynamicPageComponent.loadComponent(0);
  }
}
@Component({
  templateUrl: './carrot.26.html'
})
export class CarrotAfter26Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.loaderService.enableTip = false;
  }
  goKorail() {
    this.loaderService.currentIndex = 0;
    this.loaderService.changeRoute('korail');
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(0);
  }
  goCategory() {
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
}
