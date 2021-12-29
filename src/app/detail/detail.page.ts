import { Component, OnInit } from '@angular/core';

import { BaeminService } from '../services/baemin.service';
import { BaeminAfterService } from '../services/baemin-after.service';
import { PageItem } from '../classes/page-item';
import { ActivatedRoute } from '@angular/router';
import { NaverService } from '../services/naver.service';
import { LoaderService } from '../services/loader.service';
@Component({
  template: `
  <div>
    <app-dynamic-page [ads]="ads" [afterAds]="afterAds" [flag]="this.loaderService.flag"></app-dynamic-page>
  </div>
`
})
export class DetailPage implements OnInit{
  ads: PageItem[] = [];
  afterAds: PageItem[] = [];
  constructor(
    private baeminService: BaeminService,
    private baeminAfterService: BaeminAfterService,
    private naverService: NaverService,
    private route: ActivatedRoute,
    private loaderService: LoaderService
  ) {
    this.ads = this.loaderService.ads;
    this.afterAds = this.loaderService.afterAds;
  }
  ngOnInit() {
  }
}
