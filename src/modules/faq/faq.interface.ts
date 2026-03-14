import { model, Schema } from "mongoose";

export interface IFaq {
  question: string;
  answer: string;
}
const faqSchema = new Schema<IFaq>({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

export const Faq = model<IFaq>('Faq', faqSchema);
