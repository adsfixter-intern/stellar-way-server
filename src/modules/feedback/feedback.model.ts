import { Schema, model } from 'mongoose';
import { ITestimonial } from './feedback.interface';

const testimonialSchema = new Schema<ITestimonial>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  companyLogo: String,
  designation: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

export const Testimonial = model<ITestimonial>('Testimonial', testimonialSchema);

