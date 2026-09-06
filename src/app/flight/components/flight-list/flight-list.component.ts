import { Component } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent {
  flights: FlightModel[] = [];

  constructor(
    private flightService: FlightService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe({
      next: (res) => {
        this.flights = res;
      },
      error: (error) => {
        console.log('Error while loading flight', error);
      },
    });
  }

  viewFlightDetails(flight: FlightModel): void {
    this.router.navigate(['/flights', flight.flight_id]);
  }
}
