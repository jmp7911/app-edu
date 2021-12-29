import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonFab, Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('fab') fab: IonFab;
  isCertify = false;
  isIOS: boolean;
  constructor(
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute,
    private platform: Platform,
  ) { }
  ngOnChanges() {
    console.log('onChanges');
  }
  ngAfterViewInit() {
    console.log('afterViewInit');
  }
  ngOnInit() {
    if (localStorage.getItem('isCertify') === 'true') {
      this.isCertify = true;
    }
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.isIOS = true;
      } else {
        this.isIOS = false;
      }
    });
  }
  openTip() {
    console.log('openTip');
    this.loaderService.changeFlag('tip');
  }
  openHome() {
    if (localStorage.getItem('isCertify') !== 'true') {
      return;
    }
    this.loaderService.self = 'home';
    this.loaderService.enableTip = false;
    this.loaderService.isByMyself = false;
    this.loaderService.currentIndex = 0;
    this.router.navigate(['/home/category']);
  }
  openCategory() {
    this.loaderService.enableTip = false;
    this.loaderService.isByMyself = false;
    this.loaderService.currentIndex = 0;
    this.loaderService.changeFlag('category');
  }
  backButtonEvent() {
    this.loaderService.changeFlag('back');
  }
}
