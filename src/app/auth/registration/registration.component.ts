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

  onSubmit(registationForm: NgForm): void {
    if (registationForm.valid) {
      if (
        this.registrationData.password !== this.registrationData.confirmPassword
      ) {
        console.log('Password do not match');
        return;
      }
    }
    console.log('registration Data: ', this.registrationData);
  }
}
