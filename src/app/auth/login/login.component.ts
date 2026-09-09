import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: LoginModel = new LoginModel();

  constructor(private authenticationService: AuthenticationService) {}

  onLogin(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.authenticationService.login(this.loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
        },
        error: (error) => {
          console.log('Login failed:', error);
        },
      });
    }
  }
}
