import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthWebService {

  constructor() { }

  /**
   * APIに対し、実際にリクエストを投げる処理
   * @returns 
   */
  login() {
    console.log('webService');
    return;
  }
}
