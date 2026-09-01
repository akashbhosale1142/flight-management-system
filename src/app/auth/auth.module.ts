import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [LoginComponent, RegistrationComponent],
})
export class AuthModule {}
