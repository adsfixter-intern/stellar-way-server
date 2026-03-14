import { model, Schema } from "mongoose";
import { IMessage } from "./message.interface";

const messageSchema = new Schema<IMessage>({
  name: String,
  email: String,
  phone: String,
  message: String,
  status: { type: String, enum: ['pending', 'replied'], default: 'pending' },
  date: { type: Date, default: Date.now }
});

export const Message = model<IMessage>('Message', messageSchema);