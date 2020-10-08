import { TestBed } from '@angular/core/testing';

import { SgbdService } from './sgbd.service';

describe('SgbdService', () => {
  let service: SgbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SgbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
