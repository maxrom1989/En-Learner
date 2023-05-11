import { TestBed } from '@angular/core/testing';

import { MainDataServiceService } from './main-data-service.service';

describe('MainDataServiceService', () => {
  let service: MainDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
