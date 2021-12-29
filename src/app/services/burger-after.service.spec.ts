import { TestBed } from '@angular/core/testing';

import { BurgerAfterService } from './burger-after.service';

describe('BurgerAfterService', () => {
  let service: BurgerAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
