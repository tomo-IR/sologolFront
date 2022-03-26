import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, MaxLengthValidator } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
import { Observable } from 'rxjs';
import { LoginRequest } from 'src/services/auth/mold/login-request';
import { LoginResponse } from 'src/services/auth/mold/login-response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  fc: FormControl;
  fg: FormGroup;
  of: Observable<string>;
  res: LoginResponse
  token;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
    })
  }


  get username() {
    return this.fg.get('username');
  }

  get password() {
    return this.fg.get('password');
  }

  public getUsernameErrorMessege() {
    // 変数を作って、最後にreturn
    console.log(this.username)
    if (this.username.errors?.['required']) {
      console.log('必須項目です')
      return '必須項目です'
    } else if (!this.username.errors?.['minLength']) {
      console.log('3文字以上入力してね')
      return '3文字以上入力してね'
    } else if (this.username.errors?.['maxLength']) {
      return '10文字以下にしてね'
    } else {
      return null;
    }
  }

  public getPasswordErrorMessege() {
    console.log(this.password)
    if (this.password.errors?.['required']) {
      console.log('必須項目です')
      return '必須項目です'
    } else {
      return null;
    }
  }

  login() {
    return this.authService.login(this.fg.value).subscribe(data => this.res = {
      token: (data as any).token
    })
    // console.log(this.authService.login(this.fg.value.username, this.fg.value.password))
    // return this.authService.login(this.fg.value.username, this.fg.value.password);
  }

  getConfig() {
    this.token = this.authService.getConfig().subscribe(data => this.res = {
      token: (data as any).token
    })
  }


}


