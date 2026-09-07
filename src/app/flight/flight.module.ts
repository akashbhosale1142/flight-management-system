import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightRoutingModule } from './flight-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightListComponent,
    FlightCardComponent,
    FlightDetailsComponent,
  ],
  imports: [CommonModule, FlightRoutingModule, FormsModule],
  exports: [FlightListComponent],
})
export class FlightModule {}
