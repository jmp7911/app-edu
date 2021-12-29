import { Injectable } from '@angular/core';

import {
  CarrotAfterComponent, CarrotAfter1Component, CarrotAfter2Component, CarrotAfter3Component,
  CarrotAfter4Component, CarrotAfter5Component, CarrotAfter6Component, CarrotAfter7Component,
  CarrotAfter8Component, CarrotAfter9Component, CarrotAfter10Component, CarrotAfter11Component,
  CarrotAfter12Component, CarrotAfter13Component, CarrotAfter14Component, CarrotAfter15Component,
  CarrotAfter16Component, CarrotAfter17Component, CarrotAfter18Component, CarrotAfter19Component,
  CarrotAfter20Component, CarrotAfter21Component, CarrotAfter22Component, CarrotAfter23Component,
  CarrotAfter24Component, CarrotAfter25Component, CarrotAfter26Component,
} from '../components/carrot-after/carrot-after.component';

import { PageItem } from '../classes/page-item';

@Injectable()
export class CarrotAfterService {
  getContent() {
    return [
      new PageItem(
        CarrotAfterComponent
      ),
      new PageItem(
        CarrotAfter1Component
      ),
      new PageItem(
        CarrotAfter2Component
      ),
      new PageItem(
        CarrotAfter3Component
      ),
      new PageItem(
        CarrotAfter4Component
      ),
      new PageItem(
        CarrotAfter5Component
      ),
      new PageItem(
        CarrotAfter6Component
      ),
      new PageItem(
        CarrotAfter7Component
      ),
      new PageItem(
        CarrotAfter8Component
      ),
      new PageItem(
        CarrotAfter9Component
      ),
      new PageItem(
        CarrotAfter10Component
      ),
      new PageItem(
        CarrotAfter11Component
      ),
      new PageItem(
        CarrotAfter12Component
      ),
      new PageItem(
        CarrotAfter13Component
      ),
      new PageItem(
        CarrotAfter14Component
      ),
      new PageItem(
        CarrotAfter15Component
      ),
      new PageItem(
        CarrotAfter16Component
      ),
      new PageItem(
        CarrotAfter17Component
      ),
      new PageItem(
        CarrotAfter18Component
      ),
      new PageItem(
        CarrotAfter19Component
      ),
      new PageItem(
        CarrotAfter20Component
      ),
      new PageItem(
        CarrotAfter21Component
      ),
      new PageItem(
        CarrotAfter22Component
      ),
      new PageItem(
        CarrotAfter23Component
      ),
      new PageItem(
        CarrotAfter24Component
      ),
      new PageItem(
        CarrotAfter25Component
      ),
      new PageItem(
        CarrotAfter26Component
      ),
    ];
  }
}
