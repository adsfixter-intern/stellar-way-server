import { Types } from 'mongoose';

export interface IBooking {
  userId: Types.ObjectId;
  address: string;
  guest: number;
  time: string;
  date: string;
}