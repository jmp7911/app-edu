import { Injectable } from '@angular/core';

import {
  BurgerComponent, Burger1Component, Burger2Component, Burger3Component,
  Burger4Component, Burger5Component, Burger6Component, Burger7Component,
  Burger8Component, Burger9Component, Burger10Component, Burger11Component,
  Burger12Component, Burger13Component, Burger14Component, Burger15Component,
  Burger16Component, Burger17Component, Burger18Component, Burger19Component,
  Burger20Component, Burger21Component, Burger22Component, Burger23Component,
  Burger24Component, Burger25Component, Burger26Component, Burger27Component,
  Burger28Component
} from '../components/burger/burger.component';

import { PageItem } from '../classes/page-item';

@Injectable()
export class BurgerService {
  getContent() {
    return [
      new PageItem(
        BurgerComponent
      ),
      new PageItem(
        Burger1Component
      ),
      new PageItem(
        Burger2Component
      ),
      new PageItem(
        Burger3Component
      ),
      new PageItem(
        Burger4Component
      ),
      new PageItem(
        Burger5Component
      ),
      new PageItem(
        Burger6Component
      ),
      new PageItem(
        Burger7Component
      ),
      new PageItem(
        Burger8Component
      ),
      new PageItem(
        Burger9Component
      ),
      new PageItem(
        Burger10Component
      ),
      new PageItem(
        Burger11Component
      ),
      new PageItem(
        Burger12Component
      ),
      new PageItem(
        Burger13Component
      ),
      new PageItem(
        Burger14Component
      ),
      new PageItem(
        Burger15Component
      ),
      new PageItem(
        Burger16Component
      ),
      new PageItem(
        Burger17Component
      ),
      new PageItem(
        Burger18Component
      ),
      new PageItem(
        Burger19Component
      ),
      new PageItem(
        Burger20Component
      ),
      new PageItem(
        Burger21Component
      ),
      new PageItem(
        Burger22Component
      ),
      new PageItem(
        Burger23Component
      ),
      new PageItem(
        Burger24Component
      ),
      new PageItem(
        Burger25Component
      ),
      new PageItem(
        Burger26Component
      ),
      new PageItem(
        Burger27Component
      ),
      new PageItem(
        Burger28Component
      ),
    ];
  }
}
