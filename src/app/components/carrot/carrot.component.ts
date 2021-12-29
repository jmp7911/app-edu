import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { UtilService } from 'src/app/services/util.service';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';
import { Page } from '../page';

@Component({
  templateUrl: './carrot.0.html',
})
export class CarrotComponent implements Page {
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
  templateUrl: './carrot.1.html'
})
export class Carrot1Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(2);
  }
}
@Component({
  templateUrl: './carrot.2.html'
})
export class Carrot2Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './carrot.3.html'
})
export class Carrot3Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(4);
    } else {
      this.dynamicPageComponent.loadComponent(4);
    }
  }
}
@Component({
  templateUrl: './carrot.4.html'
})
export class Carrot4Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(5);
    } else {
      this.dynamicPageComponent.loadComponent(5);
    }
  }
}
@Component({
  templateUrl: './carrot.5.html'
})
export class Carrot5Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(6);
    } else {
      this.dynamicPageComponent.loadComponent(6);
    }
  }
}
@Component({
  templateUrl: './carrot.6.html'
})
export class Carrot6Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(7);
    } else {
      this.dynamicPageComponent.loadComponent(7);
    }
  }
}
@Component({
  templateUrl: './carrot.7.html'
})
export class Carrot7Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(8);
  }
}
@Component({
  templateUrl: './carrot.8.html'
})
export class Carrot8Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(9);
  }
}
@Component({
  templateUrl: './carrot.9.html'
})
export class Carrot9Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(9);
    } else {
      this.dynamicPageComponent.loadComponent(10);
    }
  }
}
@Component({
  templateUrl: './carrot.10.html'
})
export class Carrot10Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    ) {
  }
  goNext() {
    if (this.loaderService.isTutorial) {
      this.dynamicPageComponent.loadComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(11);
    }
  }
}
@Component({
  templateUrl: './carrot.11.html'
})
export class Carrot11Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
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
  templateUrl: './carrot.12.html'
})
export class Carrot12Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 12;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(13);
  }
}
@Component({
  templateUrl: './carrot.13.html'
})
export class Carrot13Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(11);
    } else {
      this.dynamicPageComponent.loadComponent(14);
    }
  }
}
@Component({
  templateUrl: './carrot.14.html'
})
export class Carrot14Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(12);
    } else {
      this.dynamicPageComponent.loadComponent(15);
    }
  }
}
@Component({
  templateUrl: './carrot.15.html'
})
export class Carrot15Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(13);
    } else {
      this.dynamicPageComponent.loadComponent(16);
    }
  }
}
@Component({
  templateUrl: './carrot.16.html'
})
export class Carrot16Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(14);
    } else {
      this.dynamicPageComponent.loadComponent(17);
    }
  }
}
@Component({
  templateUrl: './carrot.17.html'
})
export class Carrot17Component implements Page {
  @Input() data: any;
  pass = false;
  basic = 130000;
  amount = '125,000';
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService,
    private decimalPipe: DecimalPipe,
  ) {
  }
  selectDiscount($event) {
    if ($event.target.value === 'discount1') {
      this.pass = true;
      this.amount = this.decimalPipe.transform(this.basic - 5000, '1.0-2');
    } else if ($event.target.value === 'discount2') {
      this.pass = false;
      this.amount = this.decimalPipe.transform(this.basic - 10000, '1.0-2');
    } else {
      this.pass = false;
      this.amount = this.decimalPipe.transform(this.basic - 20000, '1.0-2');
    }
  }
  goNext() {
    if (!this.pass) {
      this.utilService.showAlert('알림', '-5000원을 선택해보세요');
      return;
    }
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(15);
    } else {
      this.dynamicPageComponent.loadComponent(18);
    }
  }
}
@Component({
  templateUrl: './carrot.18.html'
})
export class Carrot18Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(16);
    } else {
      this.dynamicPageComponent.loadComponent(19);
    }
  }
}
@Component({
  templateUrl: './carrot.19.html'
})
export class Carrot19Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(17);
    } else {
      this.dynamicPageComponent.loadComponent(20);
    }
  }
}
@Component({
  templateUrl: './carrot.20.html'
})
export class Carrot20Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(18);
    } else {
      if (this.loaderService.isTutorial) {
        this.dynamicPageComponent.loadComponent(23);
      } else {
        this.dynamicPageComponent.loadComponent(21);
      }
    }
  }
}
@Component({
  templateUrl: './carrot.21.html'
})
export class Carrot21Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
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
  templateUrl: './carrot.22.html'
})
export class Carrot22Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
    if (!this.loaderService.isTutorial) {
      this.loaderService.backToHome = 22;
    }
  }
  goNext() {
    this.dynamicPageComponent.loadComponent(23);
  }
}
@Component({
  templateUrl: './carrot.23.html'
})
export class Carrot23Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(19);
    } else {
      this.dynamicPageComponent.loadComponent(24);
    }
  }
}
@Component({
  templateUrl: './carrot.24.html'
})
export class Carrot24Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(20);
    } else {
      this.dynamicPageComponent.loadComponent(25);
    }
  }
}
@Component({
  templateUrl: './carrot.25.html'
})
export class Carrot25Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(21);
    } else {
      this.dynamicPageComponent.loadComponent(26);
    }
  }
}
@Component({
  templateUrl: './carrot.26.html'
})
export class Carrot26Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(22);
    } else {
      this.dynamicPageComponent.loadComponent(27);
    }
  }
}
@Component({
  templateUrl: './carrot.27.html'
})
export class Carrot27Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(23);
    } else {
      this.dynamicPageComponent.loadComponent(28);
    }
  }
}
@Component({
  templateUrl: './carrot.28.html'
})
export class Carrot28Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
    private loaderService: LoaderService,
    private utilService: UtilService) {
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
  templateUrl: './carrot.29.html'
})
export class Carrot29Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(25);
    } else {
      this.dynamicPageComponent.loadComponent(30);
    }
  }
}
@Component({
  templateUrl: './carrot.30.html'
})
export class Carrot30Component implements Page {
  @Input() data: any;
  constructor(private dynamicPageComponent: DynamicPageComponent,
  private loaderService: LoaderService) {
  }
  goNext() {
    if (this.loaderService.isByMyself) {
      this.dynamicPageComponent.loadAfterComponent(26);
    } else {
      this.dynamicPageComponent.loadComponent(31);
    }
  }
}
@Component({
  templateUrl: './carrot.31.html'
})
export class Carrot31Component implements Page {
  @Input() data: any;
  constructor(
    private dynamicPageComponent: DynamicPageComponent,
    private router: Router,
    private loaderService: LoaderService,
    private utilService: UtilService
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
    console.log('baemin-after work');
  }
}
