import { TestBed } from '@angular/core/testing';

import { NaverService } from './naver.service';

describe('NaverService', () => {
  let service: NaverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
