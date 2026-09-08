import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from '../models/registration.model';
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

    return true;
  }

  onSubmit(registrationForm: NgForm): void {
    if (!this.validateForm(registrationForm)) {
      return;
    }
    this.authenticationService.register(this.registrationData).subscribe({
      next: (response) => {
        console.log('registration successful', response);
      },
      error: (error) => {
        console.log('Registration failed', error);
      },
    });
  }
}
