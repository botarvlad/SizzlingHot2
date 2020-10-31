import { TestBed } from '@angular/core/testing';

import { BadBarService } from './bad-bar.service';

describe('BadBarService', () => {
  let service: BadBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
