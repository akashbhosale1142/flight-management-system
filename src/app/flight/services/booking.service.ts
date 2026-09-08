import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingModel } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private url = 'https://dummyjson.com/c/123c-9fbf-4346-9dc2';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<BookingModel[]> {
    return this.http.get<BookingModel[]>(this.url);
  }

  getBookingById(id: number): Observable<BookingModel | undefined> {
    return this.getBookings().pipe(
      map((bookings) => bookings.find((booking) => booking.booking_id === id)),
    );
  }

  createBooking(booking: BookingModel): Observable<BookingModel> {
    return this.http.post<BookingModel>(this.url, booking);
  }
}
