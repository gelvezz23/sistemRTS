import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class FormsttedValuesService {
  readonly configUrl =
    'https://ca-rst-dev-01.prouddesert-f9ed053c.eastus2.azurecontainerapps.io/data/formatted-values';

  constructor(private http: HttpClient) {}

  getFormattedValues(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Postman-Token': '<calculated when request is sent>',
      'Access-Control-Allow-Origin': '*',
      'Custom-Header': 'CustomHeaderValue',
    });
    const response = this.http
      .get(this.configUrl, {
        headers: headers,
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
