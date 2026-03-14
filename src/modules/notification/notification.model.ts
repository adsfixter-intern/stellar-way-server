import { Schema, model } from 'mongoose';
import { INotification } from './notification.interface';

const notificationSchema = new Schema<INotification>({
  title: { type: String, required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['order', 'event', 'system'] },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['read', 'unread'], default: 'unread' }
}, { timestamps: true });

export const Notification = model<INotification>('Notification', notificationSchema);