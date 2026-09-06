import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';

const routes: Routes = [
  {
    path: '',
    component: FlightListComponent,
  },
  {
    path: ':id',
    component: FlightDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
