import { TestBed } from '@angular/core/testing';

import { NaverAfterService } from './naver-after.service';

describe('NaverAfterService', () => {
  let service: NaverAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaverAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
