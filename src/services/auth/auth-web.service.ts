import { Injectable } from '@angular/core';
import { LoginResponse } from './mold/login-response';
// import { AngularRESTClient as RESTClient } from 'rest-annotations/angular'
import { HttpClient, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseUrl, Body, POST, Header } from 'rest-annotations';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginRequest } from './mold/login-request';

@Injectable({
  providedIn: 'root'
})
// @BaseUrl(environment.apiUrl)
export class AuthWebService {
  url = environment.apiUrl;
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  
  constructor(private http: HttpClient) { 
  }

  getConfig() {
    return this.http.get<LoginResponse>(this.url, { observe: 'response' })
    // .subscribe((res) => {
    //   console.log(res)
    //   return res;
    // });
  }

  /**
   * APIに対し、実際にリクエストを投げる処理
   * @returns 
   */
  login(req: LoginRequest): Observable<LoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<LoginResponse>(this.url + 'login', req, httpOptions).pipe()}
}
