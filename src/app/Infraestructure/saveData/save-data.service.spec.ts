import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { SaveDataService } from './save-data.service';

describe('SaveDataService', () => {
  let service: SaveDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [SaveDataService],
    });

    service = TestBed.inject(SaveDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Añade más pruebas aquí...

  afterEach(() => {
    httpMock.verify();
  });
});
