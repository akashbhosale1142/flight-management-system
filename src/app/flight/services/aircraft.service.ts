import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AircraftModel } from '../models/aircraft';

@Injectable({
  providedIn: 'root',
})
export class AircraftService {
  private url = 'https://dummyjson.com/c/8655-b4e5-422e-8b57';

  constructor(private http: HttpClient) {}

  getAircraft(): Observable<AircraftModel[]> {
    return this.http.get<AircraftModel[]>(this.url);
  }
}
