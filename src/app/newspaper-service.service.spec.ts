import { TestBed } from '@angular/core/testing';

import { NewspaperServiceService } from './newspaper-service.service';

describe('NewspaperServiceService', () => {
  let service: NewspaperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspaperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
