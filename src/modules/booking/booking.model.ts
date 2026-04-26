import { Schema, model } from 'mongoose';
import { IBooking } from './booking.interface';

// const bookingSchema = new Schema<IBooking>({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   address: { type: String, default: "Not Specified" },
//   guest: { type: Number, required: true },
//   date: { type: String, required: true },
//   startTime: { type: String, required: true },
//   endTime: { type: String, required: true },
//   tableIds: [{ type: Schema.Types.ObjectId, ref: 'Table', required: true }]
// }, { timestamps: true });



const bookingSchema = new Schema<IBooking>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, default: "Not Specified" },
  guest: { type: Number, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  tableIds: [{ type: Schema.Types.ObjectId, ref: 'Table', required: true }],
  // নতুন পেমেন্ট ফিল্ডস
  totalPrice: { type: Number, required: true },
  transactionId: { type: String, required: true, unique: true },
  paymentStatus: { 
    type: String, 
    enum: ["pending", "paid", "cancelled"], 
    default: "pending" 
  },
  paymentMethod: { 
    type: String, 
    enum: ["SSLCommerz", "Stripe"], 
    required: true 
  }
}, { timestamps: true });

export const Booking = model<IBooking>('Booking', bookingSchema, 'booking');