import { Injectable } from '@angular/core';

import {
  NaverAfterComponent,
  NaverAfter1Component, NaverAfter2Component, NaverAfter3Component,
  NaverAfter4Component, NaverAfter5Component, NaverAfter6Component, NaverAfter7Component,
  NaverAfter8Component, NaverAfter9Component, NaverAfter10Component, NaverAfter11Component,
  NaverAfter12Component, NaverAfter13Component, NaverAfter14Component, NaverAfter15Component,
  NaverAfter16Component, NaverAfter17Component, NaverAfter18Component, NaverAfter19Component,
  NaverAfter20Component,
} from '../components/naver-after/naver-after.component';

import { PageItem } from '../classes/page-item';

@Injectable()
export class NaverAfterService {
  getContent() {
    return [
      new PageItem(
        NaverAfterComponent
      ),
      new PageItem(
        NaverAfter1Component
      ),
      new PageItem(
        NaverAfter2Component
      ),
      new PageItem(
        NaverAfter3Component
      ),
      new PageItem(
        NaverAfter4Component
      ),
      new PageItem(
        NaverAfter5Component
      ),
      new PageItem(
        NaverAfter6Component
      ),
      new PageItem(
        NaverAfter7Component
      ),
      new PageItem(
        NaverAfter8Component
      ),
      new PageItem(
        NaverAfter9Component
      ),
      new PageItem(
        NaverAfter10Component
      ),
      new PageItem(
        NaverAfter11Component
      ),
      new PageItem(
        NaverAfter12Component
      ),
      new PageItem(
        NaverAfter13Component
      ),
      new PageItem(
        NaverAfter14Component
      ),
      new PageItem(
        NaverAfter15Component
      ),
      new PageItem(
        NaverAfter16Component
      ),
      new PageItem(
        NaverAfter17Component
      ),
      new PageItem(
        NaverAfter18Component
      ),
      new PageItem(
        NaverAfter19Component
      ),
      new PageItem(
        NaverAfter20Component
      ),
    ];
  }
}
