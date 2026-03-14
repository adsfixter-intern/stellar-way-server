import { Types } from 'mongoose';

export interface IEventBooking {
  userId: Types.ObjectId;
  eventId: Types.ObjectId;
  numberOfSeats: number;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'cancelled';
  bookingDate: Date;
}