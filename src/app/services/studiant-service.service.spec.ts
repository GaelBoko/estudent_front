import { TestBed } from '@angular/core/testing';

import { StudiantServiceService } from './studiant-service.service';

describe('StudiantServiceService', () => {
  let service: StudiantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
