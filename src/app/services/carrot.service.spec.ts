import { TestBed } from '@angular/core/testing';

import { CarrotService } from './carrot.service';

describe('CarrotService', () => {
  let service: CarrotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
