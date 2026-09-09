import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegistrationModel } from '../models/registration.model';
import { RegistrationRequestModel } from '../models/registration-request.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationData: RegistrationModel = new RegistrationModel();

  constructor(private authenticationService: AuthenticationService) {}

  validateForm(registrationForm: NgForm): boolean {
    if (registrationForm.invalid) {
      return false;
    }

    if (
      this.registrationData.password !== this.registrationData.confirmPassword
    ) {
      return false;
    }

    return true;
  }

  onSubmit(registrationForm: NgForm): void {
    if (!this.validateForm(registrationForm)) {
      return;
    }

    const registrationRequest: RegistrationRequestModel = {
      userName: this.registrationData.userName,
      email: this.registrationData.email,
      password: this.registrationData.password,
      phone: this.registrationData.phone,
    };

    this.authenticationService.register(registrationRequest).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
      },
      error: (error) => {
        console.log('Registration failed', error);
      },
    });
  }
}
