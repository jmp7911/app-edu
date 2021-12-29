import { Injectable } from '@angular/core';

import {
  BurgerAfterComponent, BurgerAfter1Component, BurgerAfter2Component, BurgerAfter3Component,
  BurgerAfter4Component, BurgerAfter5Component, BurgerAfter6Component, BurgerAfter7Component,
  BurgerAfter8Component, BurgerAfter9Component, BurgerAfter10Component, BurgerAfter11Component,
  BurgerAfter12Component, BurgerAfter13Component, BurgerAfter14Component, BurgerAfter15Component,
  BurgerAfter16Component, BurgerAfter17Component, BurgerAfter18Component, BurgerAfter19Component,
  BurgerAfter20Component, BurgerAfter21Component, BurgerAfter22Component, BurgerAfter23Component,
  BurgerAfter24Component,
} from '../components/burger-after/burger-after.component';

import { PageItem } from '../classes/page-item';

@Injectable()
export class BurgerAfterService {
  getContent() {
    return [
      new PageItem(
        BurgerAfterComponent
      ),
      new PageItem(
        BurgerAfter1Component
      ),
      new PageItem(
        BurgerAfter2Component
      ),
      new PageItem(
        BurgerAfter3Component
      ),
      new PageItem(
        BurgerAfter4Component
      ),
      new PageItem(
        BurgerAfter5Component
      ),
      new PageItem(
        BurgerAfter6Component
      ),
      new PageItem(
        BurgerAfter7Component
      ),
      new PageItem(
        BurgerAfter8Component
      ),
      new PageItem(
        BurgerAfter9Component
      ),
      new PageItem(
        BurgerAfter10Component
      ),
      new PageItem(
        BurgerAfter11Component
      ),
      new PageItem(
        BurgerAfter12Component
      ),
      new PageItem(
        BurgerAfter13Component
      ),
      new PageItem(
        BurgerAfter14Component
      ),
      new PageItem(
        BurgerAfter15Component
      ),
      new PageItem(
        BurgerAfter16Component
      ),
      new PageItem(
        BurgerAfter17Component
      ),
      new PageItem(
        BurgerAfter18Component
      ),
      new PageItem(
        BurgerAfter19Component
      ),
      new PageItem(
        BurgerAfter20Component
      ),
      new PageItem(
        BurgerAfter21Component
      ),
      new PageItem(
        BurgerAfter22Component
      ),
      new PageItem(
        BurgerAfter23Component
      ),
      new PageItem(
        BurgerAfter24Component
      ),
    ];
  }
}
