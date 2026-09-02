import { Injectable } from '@angular/core';
import { FlightModel } from '../models/flight.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private url = 'https://dummyjson.com/c/c27c-1fb8-4921-82ca';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<FlightModel[]> {
    return this.http.get<FlightModel[]>(this.url);
  }
}
