import { TestBed } from '@angular/core/testing';

import { CarrotAfterService } from './carrot-after.service';

describe('CarrotAfterService', () => {
  let service: CarrotAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrotAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
