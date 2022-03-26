import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthWebService } from './auth-web.service';
import { LoginRequest } from './mold/login-request';
import { LoginResponse } from './mold/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  res:string;
  constructor(
    private authWebService: AuthWebService
  ) { }
    /**
     * コンポーネントとサービスの中継用のサービス
     * @returns 
     */
  login(req: LoginRequest): Observable<LoginResponse> {
    sessionStorage.setItem('key', 'value')
    return this.authWebService.login(req)

  }

  getConfig(){
    return this.authWebService.getConfig();
  }

}
