import { Injectable } from '@angular/core';
import { PageItem } from '../classes/page-item';

import {
  NaverComponent, Naver1Component, Naver2Component,
  Naver3Component, Naver4Component, Naver5Component, Naver6Component,
  Naver7Component, Naver8Component, Naver9Component, Naver10Component,
  Naver11Component, Naver12Component, Naver13Component, Naver14Component,
  Naver15Component, Naver16Component, Naver17Component, Naver18Component,
  Naver19Component, Naver20Component, Naver21Component, Naver22Component,
  Naver23Component, Naver24Component, Naver25Component, Naver26Component,
  Naver27Component,Naver28Component
} from '../components/naver/naver.component';
@Injectable({
  providedIn: 'root'
})
export class NaverService {
  getContent() {
    return [
      new PageItem(
        NaverComponent
      ),
      new PageItem(
        Naver1Component
      ),
      new PageItem(
        Naver2Component
      ),
      new PageItem(
        Naver3Component
      ),
      new PageItem(
        Naver4Component
      ),
      new PageItem(
        Naver5Component
      ),
      new PageItem(
        Naver6Component
      ),
      new PageItem(
        Naver7Component
      ),
      new PageItem(
        Naver8Component
      ),
      new PageItem(
        Naver9Component
      ),
      new PageItem(
        Naver10Component
      ),
      new PageItem(
        Naver11Component
      ),
      new PageItem(
        Naver12Component
      ),
      new PageItem(
        Naver13Component
      ),
      new PageItem(
        Naver14Component
      ),
      new PageItem(
        Naver15Component
      ),
      new PageItem(
        Naver16Component
      ),
      new PageItem(
        Naver17Component
      ),
      new PageItem(
        Naver18Component
      ),
      new PageItem(
        Naver19Component
      ),
      new PageItem(
        Naver20Component
      ),
      new PageItem(
        Naver21Component
      ),
      new PageItem(
        Naver22Component
      ),
      new PageItem(
        Naver23Component
      ),
      new PageItem(
        Naver24Component
      ),
      new PageItem(
        Naver25Component
      ),
      new PageItem(
        Naver26Component
      ),
      new PageItem(
        Naver27Component
      ),
      new PageItem(
        Naver28Component
      ),
    ];
  }
}
