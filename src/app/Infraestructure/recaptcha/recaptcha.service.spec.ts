import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RecaptchaService } from './recaptcha.service';

describe('RecaptchaService', () => {
  let service: RecaptchaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecaptchaService],
    });
    service = TestBed.inject(RecaptchaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify reCAPTCHA token', () => {
    const mockResponse = '{ success: true }';
    const token = 'test-token';

    service.getVerificationCaptcha(token).subscribe((response) => {
      expect(response).toEqual(response);
    });

    const req = httpMock.expectOne(service.configUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should handle error response', () => {
    const token = 'test-token';

    service.getVerificationCaptcha(token).subscribe({
      next: () => fail('should have failed with the 500 error'),
      error: (error) => {
        expect(error.status).toEqual(500);
      },
    });

    const req = httpMock.expectOne(service.configUrl);
    expect(req.request.method).toBe('POST');
    req.flush('Invalid request parameters', {
      status: 500,
      statusText: 'Server Error',
    });
  });
});
