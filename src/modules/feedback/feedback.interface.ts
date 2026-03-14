import { Types } from 'mongoose';

export interface ITestimonial {
  name: string;
  description: string;
  companyLogo?: string;
  designation: string;
  userId: Types.ObjectId; 
}

