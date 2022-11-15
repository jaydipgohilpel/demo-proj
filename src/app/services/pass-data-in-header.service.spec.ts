import { TestBed } from '@angular/core/testing';

import { PassDataInHeaderService } from './pass-data-in-header.service';

describe('PassDataInHeaderService', () => {
  let service: PassDataInHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassDataInHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
