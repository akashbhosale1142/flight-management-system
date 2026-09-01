import { Injectable } from '@angular/core';
import { FlightModel } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  flights: FlightModel[] = [
    {
      flight_id: 1,
      flight_number: 'AI101',
      airline_id: 1,
      aircraft_id: 10,
      departure_airport_id: 101,
      arrival_airport_id: 102,
      departure_time: '2026-09-10T10:00:00',
      arrival_time: '2026-09-10T12:30:00',
      base_price: 4500,
      status: 'Scheduled',
    },
    {
      flight_id: 2,
      flight_number: 'AI202',
      airline_id: 1,
      aircraft_id: 11,
      departure_airport_id: 102,
      arrival_airport_id: 103,
      departure_time: '2026-09-11T14:00:00',
      arrival_time: '2026-09-11T16:30:00',
      base_price: 5200,
      status: 'Scheduled',
    },
    {
      flight_id: 3,
      flight_number: 'AI303',
      airline_id: 2,
      aircraft_id: 12,
      departure_airport_id: 103,
      arrival_airport_id: 101,
      departure_time: '2026-09-12T08:00:00',
      arrival_time: '2026-09-12T10:15:00',
      base_price: 3800,
      status: 'Delayed',
    },
  ];
  constructor() {}

  getFlights(): FlightModel[] {
    return this.flights;
  }
}
