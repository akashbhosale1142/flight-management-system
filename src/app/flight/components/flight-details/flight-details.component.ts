import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { AirportService } from '../../services/airport.service';
import { AirportModel } from '../../models/airport.model';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight?: FlightModel;

  departureAirport?: AirportModel;
  arrivalAirport?: AirportModel;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private airportService: AirportService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.flightService.getFlightById(id).subscribe({
      next: (res) => {
        this.flight = res;

        if (this.flight) {
          this.loadAirports();
        }
      },

      error: (error) => {
        console.log('Error while loading flight details', error);
      },
    });
  }
  loadAirports(): void {
    this.airportService.getAirports().subscribe({
      next: (airports) => {
        this.departureAirport = airports.find(
          (airport) => airport.airport_id === this.flight?.departure_airport_id,
        );

        this.arrivalAirport = airports.find(
          (airport) => airport.airport_id === this.flight?.arrival_airport_id,
        );
      },

      error: (error) => {
        console.log('Error while loading airports', error);
      },
    });
  }
}
