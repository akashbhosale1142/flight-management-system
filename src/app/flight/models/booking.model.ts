export interface BookingModel {
  booking_id: number;
  user_id: number;
  flight_id: number;
  booking_date: string;
  total_amount: number;
  booking_status: string;
}
