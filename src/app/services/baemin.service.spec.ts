import { TestBed } from '@angular/core/testing';

import { BaeminService } from './baemin.service';

describe('BaeminService', () => {
  let service: BaeminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaeminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
