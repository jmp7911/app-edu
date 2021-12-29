import { TestBed } from '@angular/core/testing';

import { KorailService } from './korail.service';

describe('KorailService', () => {
  let service: KorailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KorailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
