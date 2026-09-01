import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './components/flight-list/flight-list.component';

@NgModule({
  declarations: [FlightListComponent],
  imports: [CommonModule],
  exports: [FlightListComponent],
})
export class FlightModule {}
