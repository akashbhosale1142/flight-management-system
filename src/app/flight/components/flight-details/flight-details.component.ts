import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { AirportService } from '../../services/airport.service';
import { AirportModel } from '../../models/airport.model';
import { AirlineModel } from '../../models/airline.model';
import { AirlineService } from '../../services/airline.service';
import { AircraftModel } from '../../models/aircraft';
import { AircraftService } from '../../services/aircraft.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight?: FlightModel;

  departureAirport?: AirportModel;
  arrivalAirport?: AirportModel;

  airline?: AirlineModel;

  aircraft?: AircraftModel;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private airportService: AirportService,
    private airlineService: AirlineService,
    private aircraftService: AircraftService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.flightService.getFlightById(id).subscribe({
      next: (res) => {
        this.flight = res;

        if (this.flight) {
          this.loadAirports();
          this.loadAirlines();
          this.loadAircraft();
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
  loadAirlines(): void {
    this.airlineService.getAirlines().subscribe({
      next: (airlines) => {
        this.airline = airlines.find(
          (airline) => airline.airline_id === this.flight?.airline_id,
        );
      },
      error: (error) => {
        console.log('Error while loading airline', error);
      },
    });
  }
  loadAircraft(): void {
    this.aircraftService.getAircraft().subscribe({
      next: (aircrafts) => {
        this.aircraft = aircrafts.find((aircraft) => {
          return aircraft.aircraft_id === this.flight?.aircraft_id;
        });
      },
      error: (error) => {
        console.log('Error while loading aircraft', error);
      },
    });
  }
}
