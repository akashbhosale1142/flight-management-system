import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlightModel } from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() flight!: FlightModel;

  @Output() viewDetails = new EventEmitter<FlightModel>();

  onViewDetails(): void {
    this.viewDetails.emit(this.flight);
  }
}
