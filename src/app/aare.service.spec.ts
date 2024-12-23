import { TestBed } from '@angular/core/testing';

import { AareService } from './aare.service';

describe('AareService', () => {
  let service: AareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
