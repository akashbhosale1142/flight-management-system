import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginModel } from '../models/login.model';
import { environment } from 'src/app/environments/environment';
import { RegistrationModel } from '../models/registration.model';
import { LoginResponseModel } from '../models/login-response';
import { RegistrationResponseModel } from '../models/registration-response';
import { RegistrationRequestModel } from '../models/registration-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private Url = `${environment.baseUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  login(loginData: LoginModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${this.Url}/login`, loginData, {
      headers: {
        responseType: 'json',
        'ngrok-skip-browser-warning': 'true',
      },
    });
  }

  register(
    registrationData: RegistrationRequestModel,
  ): Observable<RegistrationResponseModel> {
    return this.http.post<RegistrationResponseModel>(
      `${this.Url}/register`,
      registrationData,
      {
        headers: {
          responseType: 'json',
          'ngrok-skip-browser-warning': 'true',
        },
      },
    );
  }
}
