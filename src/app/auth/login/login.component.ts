import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: LoginModel = new LoginModel();

  onLogin(loginForm: NgForm): void {
    if (loginForm.valid) {
      console.log('Login Data:', this.loginData);
    }
  }
}
