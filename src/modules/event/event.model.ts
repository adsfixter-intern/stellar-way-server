import { Schema, model } from 'mongoose';
import { IEvent } from './event.interface';

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  featured: { type: Boolean, default: false },
  status: { type: String, default: 'active' },
  price: { type: Number, required: true }
});

export const Event = model<IEvent>('Event', eventSchema);