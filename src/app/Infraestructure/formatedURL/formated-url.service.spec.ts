import { TestBed } from '@angular/core/testing';

import { FormatedURLService } from './formated-url.service';

describe('FormatedURLService', () => {
  let service: FormatedURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatedURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
