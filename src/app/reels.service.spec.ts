import { TestBed } from '@angular/core/testing';

import { ReelsService } from './services/reels.service';

describe('ReelsService', () => {
  let service: ReelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
