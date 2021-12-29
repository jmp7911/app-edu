import { TestBed } from '@angular/core/testing';

import { KorailAfterService } from './korail-after.service';

describe('KorailAfterService', () => {
  let service: KorailAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorailAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
