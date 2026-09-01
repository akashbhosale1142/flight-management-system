import { Component } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent {
  flights: FlightModel[] = [];

  constructor(private flightService: FlightService) {
    this.flights = this.flightService.getFlights();
  }

  viewFlightDetails(flight: FlightModel) {
    console.log(flight);
  }
}
