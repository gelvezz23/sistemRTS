import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class RecaptchaService {
  readonly configUrl =
    'https://ca-rst-dev-02.prouddesert-f9ed053c.eastus2.azurecontainerapps.io/recaptcha/verify-recaptcha';

  constructor(private http: HttpClient) {}

  getVerificationCaptcha(token: string): Observable<any> {
    const body = JSON.stringify({ token });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Postman-Token': '<calculated when request is sent>',
      'Access-Control-Allow-Origin': '*',
      'Custom-Header': 'CustomHeaderValue',
    });
    const response = this.http
      .post(this.configUrl, body, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          } else {
            throw new Error('Empty response');
          }
        }),
        catchError((error: HttpErrorResponse) => {
          console.error('Error verifying reCAPTCHA token:', error);
          return throwError(() => error);
        })
      );

    return response;
  }
}
