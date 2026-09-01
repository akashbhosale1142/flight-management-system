import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationModel } from '../models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationData: RegistrationModel = new RegistrationModel();

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
  }
}
