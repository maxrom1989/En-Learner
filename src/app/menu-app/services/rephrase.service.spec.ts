import { TestBed } from '@angular/core/testing';

import { RephraseService } from './rephrase.service';

describe('RephraseService', () => {
  let service: RephraseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RephraseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
