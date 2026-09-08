import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { BookingService } from '../../services/booking.service';
import { BookingModel } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  flight?: FlightModel;

  bookingDate = '';
  bookingStatus = 'Pending';

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookingDate = new Date().toISOString().split('T')[0];

    this.flightService.getFlightById(id).subscribe({
      next: (res) => {
        this.flight = res;
      },
      error: (error) => {
        console.log('Error while loading flight', error);
      },
    });
  }
  confirmBooking(): void {
    if (!this.flight) {
      return;
    }

    const booking: BookingModel = {
      booking_id: 0,
      user_id: 1,
      flight_id: this.flight.flight_id,
      booking_date: this.bookingDate,
      total_amount: this.flight.base_price,
      booking_status: this.bookingStatus,
    };

    this.bookingService.createBooking(booking).subscribe({
      next: (res) => {
        console.log('Booking created successfully', res);
      },
      error: (error) => {
        console.log('Error while creating booking', error);
      },
    });
  }
}
