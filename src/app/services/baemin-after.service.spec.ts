import { TestBed } from '@angular/core/testing';

import { BaeminAfterService } from './baemin-after.service';

describe('BaeminAfterService', () => {
  let service: BaeminAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaeminAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
