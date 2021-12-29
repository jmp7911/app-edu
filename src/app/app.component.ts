import { LocationStrategy } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  counter = 0;
  constructor(
    private platform: Platform,
    private locationStrategy: LocationStrategy,
    private utilService: UtilService,
    private router: Router
  ) {
    this.initializeApp();
    if (localStorage.getItem('isCertify') === 'true') {
      this.router.navigate(['/home', 'guide-first']);
    } else {
      this.router.navigate(['/home']);
    }
   }
  initializeApp() {
		this.platform.ready().then(() => {
			this.handleBackToExit();
		});
  }
  handleBackToExit() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.locationStrategy.path() === '/home' ||
        this.locationStrategy.path() === '/' || this.locationStrategy.path() === '/home/category') {
        if (this.counter === 0) {
          this.counter++;
          this.utilService.showToast('뒤로가기를 한번 더 누르면 종료됩니다.');
          setTimeout(() => {
            this.counter = 0;
          }, 1500);
        } else {
          this.counter = 0;
          // eslint-disable-next-line @typescript-eslint/dot-notation
          navigator['app'].exitApp();
        }
      }
		});
	}
}
