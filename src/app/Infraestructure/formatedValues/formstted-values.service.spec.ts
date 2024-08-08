import { TestBed } from '@angular/core/testing';

import { FormsttedValuesService } from './formstted-values.service';

describe('FormsttedValuesService', () => {
  let service: FormsttedValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsttedValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
