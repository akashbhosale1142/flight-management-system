import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirlineModel } from '../models/airline.model';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  private url = 'https://dummyjson.com/c/1c9f-c03d-4781-87c1';
  constructor(private http: HttpClient) {}

  getAirlines(): Observable<AirlineModel[]> {
    return this.http.get<AirlineModel[]>(this.url);
  }
}
