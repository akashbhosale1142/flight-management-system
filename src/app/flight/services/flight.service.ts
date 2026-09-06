import { Injectable } from '@angular/core';
import { FlightModel } from '../models/flight.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private url = 'https://dummyjson.com/c/6f67-756f-41b4-ae0c';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<FlightModel[]> {
    return this.http.get<FlightModel[]>(this.url);
  }

  getFlightById(id: number): Observable<FlightModel | undefined> {
    return this.getFlights().pipe(
      map((flights) => flights.find((flight) => flight.flight_id === id)),
    );
  }
}
