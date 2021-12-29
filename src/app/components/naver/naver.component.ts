import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';

@Component({
  templateUrl: './naver.0.html',
})
export class NaverComponent implements Page {
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
  templateUrl: './naver.1.html'
})
export class Naver1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(2);
    } else {
      this.dynamicPageComponent.loadComponent(2);
    }
  }
}
@Component({
  templateUrl: './naver.2.html'
})
export class Naver2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(3);
  }
}
@Component({
  templateUrl: './naver.3.html'
})
export class Naver3Component implements Page {
  @Input() data: any;
  add: string;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './naver.4.html'
})
export class Naver4Component implements Page {
  @Input() data: any;
  addDetail;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    this.addDetail = localStorage.getItem('BAddDetail');
  }
  goNext() {
    if (this.loaderService.isTutorial) {
      this.dynamicPageComponent.loadComponent(7);
    } else {
      this.dynamicPageComponent.loadComponent(5);
    }
  }
}
@Component({
  templateUrl: './naver.5.html'
})
export class Naver5Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(6);
    } else {
      this.dynamicPageComponent.loadComponent(6);
    }
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './naver.6.html'
})
export class Naver6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 6;
    }
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
  templateUrl: './naver.7.html'
})
export class Naver7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(8);
  }
  checkValue(value: string) {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(5);
    } else {
      this.dynamicPageComponent.loadComponent(8);
    }
    localStorage.setItem('BAddDetail', value);
    console.log(localStorage.getItem('BAddDetail'));
  }
}
@Component({
  templateUrl: './naver.8.html'
})
export class Naver8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './naver.9.html'
})
export class Naver9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(7);
    } else {
      this.dynamicPageComponent.loadComponent(10);
    }
  }
}
@Component({
  templateUrl: './naver.10.html'
})
export class Naver10Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './naver.11.html'
})
export class Naver11Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(9);
    } else {
      this.dynamicPageComponent.loadComponent(12);
    }
  }
}
@Component({
  templateUrl: './naver.12.html'
})
export class Naver12Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(10);
    } else {
      this.dynamicPageComponent.loadComponent(13);
    }
  }
}
@Component({
  templateUrl: './naver.13.html'
})
export class Naver13Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(11);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(16);
      } else {
        this.dynamicPageComponent.loadComponent(14);
      }
    }
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './naver.14.html'
})
export class Naver14Component implements Page {
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
  templateUrl: './naver.15.html'
})
export class Naver15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 15;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(16);
  }
}
@Component({
  templateUrl: './naver.16.html'
})
export class Naver16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(17);
  }
}
@Component({
  templateUrl: './naver.17.html'
})
export class Naver17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(18);
    }
  }
}
@Component({
  templateUrl: './naver.18.html'
})
export class Naver18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(19);
    }
  }
}
@Component({
  templateUrl: './naver.19.html'
})
export class Naver19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(12);
    } else {
      this.dynamicPageComponent.loadComponent(20);
    }
  }
}
@Component({
  templateUrl: './naver.20.html'
})
export class Naver20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    setTimeout(() => {
      if (this.loaderService.isByMyself) {
        if (this.loaderService.currentIndex === 12) {
          this.dynamicPageComponent.loadComponent(13);
        }
      } else {
        if (this.loaderService.currentIndex === 20) {
          this.dynamicPageComponent.loadComponent(21);
        }
      }
    }, 2500);
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(21);
    }
  }
}
@Component({
  templateUrl: './naver.21.html'
})
export class Naver21Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(14);
    } else {
      this.dynamicPageComponent.loadComponent(22);
    }
  }
}
@Component({
  templateUrl: './naver.22.html'
})
export class Naver22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(15);
    } else {
      this.dynamicPageComponent.loadComponent(23);
    }
  }
}
@Component({
  templateUrl: './naver.23.html'
})
export class Naver23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(16);
    } else {
      this.dynamicPageComponent.loadComponent(24);
    }
  }
}
@Component({
  templateUrl: './naver.24.html'
})
export class Naver24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(17);
    } else {
      this.dynamicPageComponent.loadComponent(25);
    }
  }
}
@Component({
  templateUrl: './naver.25.html'
})
export class Naver25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(18);
    } else {
      this.dynamicPageComponent.loadComponent(26);
    }
  }
}
@Component({
  templateUrl: './naver.26.html'
})
export class Naver26Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
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
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(19);
    } else {
      this.dynamicPageComponent.loadComponent(27);
    }
  }
}
@Component({
  templateUrl: './naver.27.html'
})
export class Naver27Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(28);
    }
  }
}
@Component({
  templateUrl: './naver.28.html'
})
export class Naver28Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
    ) {
  }
  goNext(index) {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadComponent(22);
    } else {
      this.dynamicPageComponent.loadComponent(index);
    }
  }
  goCategory() {
    this.router.navigate(['/home/category']);
  }
  goAfter() {
    this.dynamicPageComponent.loadAfterComponent(1);
  }
}
