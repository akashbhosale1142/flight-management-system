import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  onLogin(loginForm: NgForm): void {
    if (loginForm.valid) {
      console.log('Login Data:', this.loginData);
    }
  }
}
