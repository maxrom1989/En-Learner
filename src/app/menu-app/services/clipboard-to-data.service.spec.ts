import { TestBed } from '@angular/core/testing';

import { ClipboardToDataService } from './clipboard-to-data.service';

describe('ClipboardToDataService', () => {
  let service: ClipboardToDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipboardToDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
