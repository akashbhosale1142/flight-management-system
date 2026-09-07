import { Component } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';
import { AirportModel } from '../../models/airport.model';
import { AirportService } from '../../services/airport.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent {
  flights: FlightModel[] = [];
  airports: AirportModel[] = [];
  filteredFlights: FlightModel[] = [];

  fromAirportId: number | null = null;
  toAirportId: number | null = null;
  searchDate = '';

  constructor(
    private flightService: FlightService,
    private airportService: AirportService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe({
      next: (res) => {
        this.flights = res;
        this.filteredFlights = res;
      },
      error: (error) => {
        console.log('Error while loading flight', error);
      },
    });

    this.airportService.getAirports().subscribe({
      next: (res) => {
        this.airports = res;
      },
      error: (error) => {
        console.log('Error while loading airports', error);
      },
    });
  }

  searchFlights(): void {
    this.filteredFlights = this.flights.filter((flight) => {
      const matchesFrom =
        this.fromAirportId === null ||
        flight.departure_airport_id === this.fromAirportId;

      const matchesTo =
        this.toAirportId === null ||
        flight.arrival_airport_id === this.toAirportId;

      const matchesDate =
        !this.searchDate || flight.departure_time.startsWith(this.searchDate);

      return matchesFrom && matchesTo && matchesDate;
    });
  }

  viewFlightDetails(flight: FlightModel): void {
    this.router.navigate(['/flights', flight.flight_id]);
  }
}
