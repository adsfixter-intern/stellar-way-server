import { Schema, model } from 'mongoose';
import { ITracking } from './tracking.interface';

const trackingSchema = new Schema<ITracking>({
  orderId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true 
  },
  riderId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Rider', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['order-picked', 'on-the-way', 'near-location', 'delivered'],
    default: 'order-picked'
  },
  currentLocation: {
    lat: Number,
    lng: Number
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });

export const Tracking = model<ITracking>('Tracking', trackingSchema);