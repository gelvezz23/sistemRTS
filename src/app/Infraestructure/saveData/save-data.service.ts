import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { QuestionsProps } from '../../Domain/services/saveData';

@Injectable({
  providedIn: 'any',
})
export class SaveDataService {
  private readonly configUrl = `https://ca-rst-dev-01.prouddesert-f9ed053c.eastus2.azurecontainerapps.io/question/responses`;

  constructor(private http: HttpClient) {}

  getSaveQuestions(questions: QuestionsProps[]): Observable<any> {
    const body = window.JSON.stringify(questions);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Postman-Token': '<calculated when request is sent>',
      'Custom-Header': 'CustomHeaderValue',
    });

    return this.http
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
        catchError((error: any) => {
          // Type any for general error handling
          console.error('Error in save data:', error);
          return throwError(() => error); // Or display a user-friendly error message
        })
      );
  }
}
