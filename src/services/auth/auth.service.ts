import { Injectable } from '@angular/core';
import { AuthWebService } from './auth-web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authWebService: AuthWebService
  ) { }
    /**
     * コンポーネントとサービスの中継用のサービス
     * @returns 
     */
  login() {
    return this.authWebService.login();
  }

}
