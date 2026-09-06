import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirportModel } from '../models/airport.model';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private url = 'https://dummyjson.com/c/af18-8995-4427-b054';

  constructor(private http: HttpClient) {}

  getAirports(): Observable<AirportModel[]> {
    return this.http.get<AirportModel[]>(this.url);
  }
}
