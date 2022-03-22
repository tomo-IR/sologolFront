import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, MaxLengthValidator } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
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
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])]
    })
  }

  doClick(value) {
    console.log(value)
  }
  get username() {
    return this.fg.get('username');
  }

  get password() {
    return this.fg.get('password');
  }

  public getFormErrorMessege() {
    console.log(this.username)
    if (this.username.errors?.['required']) {
      console.log('必須項目です')
      return '必須項目です'
    } else if (this.username.errors?.['minLength'] == null) {
      console.log('3文字以上入力してね')
      return '3文字以上入力してね'
    } else {
      return null;
    }
  }

  login() {
    return this.authService.login();
  }

}


