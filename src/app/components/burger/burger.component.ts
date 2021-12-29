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
export class BurgerComponent implements Page {
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
  templateUrl: './burger.1.html'
})
export class Burger1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(2);
  }
}
@Component({
  templateUrl: './burger.2.html'
})
export class Burger2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(3);
  }
}
@Component({
  templateUrl: './burger.3.html'
})
export class Burger3Component implements Page {
  @Input() data: any;
  @ViewChild('daum_popup', { read: ElementRef }) popup: ElementRef;
  @ViewChild('add') add: ElementRef;
  interval;
  pass = false;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private renderer: Renderer2,
    private utilService: UtilService
  ) {
    this.interval = setInterval((a) => {
      if (this.pass) {
        clearInterval(this.interval);
        this.dynamicPageComponent.loadComponent(4);
      }
    }, 1500);
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(4);
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
}
@Component({
  templateUrl: './burger.4.html'
})
export class Burger4Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(5);
  }
}
@Component({
  templateUrl: './burger.5.html'
})
export class Burger5Component implements Page {
  @Input() data: any;
  @ViewChild('MAddDetail') addDetail: ElementRef;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
      this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    if (!this.addDetail.nativeElement.value) {
      this.utilService.showAlert('알림', '상세주소를 입력하세요');
      return;
    }
    localStorage.setItem('MAdd', localStorage.getItem('MAdd') + ' ' + this.addDetail.nativeElement.value);
    this.dynamicPageComponent.loadComponent(6);
  }
}
@Component({
  templateUrl: './burger.6.html'
})
export class Burger6Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService) {
      this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    if (this.loaderService.isTutorial) {
      this.dynamicPageComponent.loadComponent(9);
    } else {
      this.dynamicPageComponent.loadComponent(7);
    }
  }
  goCategory() {
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './burger.7.html'
})
export class Burger7Component implements Page {
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
  templateUrl: './burger.8.html'
})
export class Burger8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 8;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(9);
  }
}
@Component({
  templateUrl: './burger.9.html'
})
export class Burger9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(8);
    } else {
      this.dynamicPageComponent.loadComponent(10);
    }
  }
}
@Component({
  templateUrl: './burger.10.html'
})
export class Burger10Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
  ) {
    this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(9);
    } else {
      this.dynamicPageComponent.loadComponent(11);
    }
  }
}
@Component({
  templateUrl: './burger.11.html'
})
export class Burger11Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(10);
    } else {
      this.dynamicPageComponent.loadComponent(12);
    }
  }
}
@Component({
  templateUrl: './burger.12.html'
})
export class Burger12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(13);
    }
  }
}
@Component({
  templateUrl: './burger.13.html'
})
export class Burger13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(12);
    } else {
      this.dynamicPageComponent.loadComponent(14);
    }
  }
}
@Component({
  templateUrl: './burger.14.html'
})
export class Burger14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(15);
    }
  }
}
@Component({
  templateUrl: './burger.15.html'
})
export class Burger15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(14);
    } else {
      this.dynamicPageComponent.loadComponent(16);
    }
  }
}
@Component({
  templateUrl: './burger.16.html'
})
export class Burger16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(15);
    } else {
      this.dynamicPageComponent.loadComponent(17);
    }
  }
  goCategory() {
    this.loaderService.self = 'home';
    this.router.navigate(['/home/category']);
  }
}
@Component({
  templateUrl: './burger.17.html'
})
export class Burger17Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(16);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(20);
      } else {
        this.dynamicPageComponent.loadComponent(18);
      }
    }
  }
}
@Component({
  templateUrl: './burger.18.html'
})
export class Burger18Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
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
  templateUrl: './burger.19.html'
})
export class Burger19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      if (!this.loaderService.isTutorial) {
        this.loaderService.backToHome = 19;
      }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(20);
  }
}
@Component({
  templateUrl: './burger.20.html'
})
export class Burger20Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService) {
      this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(17);
    } else {
      this.dynamicPageComponent.loadComponent(21);
    }
  }
}
@Component({
  templateUrl: './burger.21.html'
})
export class Burger21Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService
    ) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(18);
    } else {
      this.dynamicPageComponent.loadComponent(22);
    }
  }
}
@Component({
  templateUrl: './burger.22.html'
})
export class Burger22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(19);
    } else {
      this.dynamicPageComponent.loadComponent(23);
    }
  }
}
@Component({
  templateUrl: './burger.23.html'
})
export class Burger23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(24);
    }
  }
}
@Component({
  templateUrl: './burger.24.html'
})
export class Burger24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private utilService: UtilService,
    private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(21);
    } else {
      this.dynamicPageComponent.loadComponent(25);
    }
  }
}
@Component({
  templateUrl: './burger.25.html'
})
export class Burger25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(22);
    } else {
      this.dynamicPageComponent.loadComponent(26);
    }
  }
}
@Component({
  templateUrl: './burger.26.html'
})
export class Burger26Component implements Page {
  @Input() data: any;
  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;
  @ViewChild('three') three: ElementRef;
  @ViewChild('four') four: ElementRef;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private utilService: UtilService,
    private loaderService: LoaderService) {
  }
  goNext() {

    if (!this.one.nativeElement.value || !this.two.nativeElement.value ||
      !this.three.nativeElement.value || !this.four.nativeElement.value) {
      this.utilService.showAlert('알림', '카드번호를 입력하세요');
      return;
    }
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(23);
    } else {
      this.dynamicPageComponent.loadComponent(27);
    }
  }
}
@Component({
  templateUrl: './burger.27.html'
})
export class Burger27Component implements Page {
  @Input() data: any;
  mAdd;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private utilService: UtilService,
    private loaderService: LoaderService) {
      this.mAdd = localStorage.getItem('MAdd');
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(24);
    } else {
      this.dynamicPageComponent.loadComponent(28);
    }
  }
}
@Component({
  templateUrl: './burger.28.html'
})
export class Burger28Component implements Page {
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
