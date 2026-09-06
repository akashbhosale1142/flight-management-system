import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight?: FlightModel;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.flightService.getFlightById(id).subscribe({
      next: (res) => {
        this.flight = res;
      },

      error: (error) => {
        console.log('Error while loading flight details', error);
      },
    });
  }
}
