import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { AirportModel } from '../../models/airport.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() flight!: FlightModel;
  @Input() airports: AirportModel[] = [];

  @Output() viewDetails = new EventEmitter<FlightModel>();

  onViewDetails(): void {
    this.viewDetails.emit(this.flight);
  }

  getAirportCode(airportId: number): string {
    return (
      this.airports.find((airport) => airport.airport_id === airportId)
        ?.airport_code || ''
    );
  }
}
